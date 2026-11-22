/* Yohaku 購入ボタン（単品・バンドル共通）
   ライセンスサーバーで Checkout セッションを作成し、応答の url（Stripe決済ページ）へ遷移する。
   トップページ（日本語／英語）で JS を使うのはこの導線（単品購入ボタン・バンドル購入ボタン）のみ。
   他のページには JS を追加しないこと。
   英語ページ（/en/）と共用するため、処理中ラベルは html の lang で出し分ける。 */
(function () {
  "use strict";

  // ▼ 販売中の価格プラン。
  //    "launch"   = 発売記念価格 ¥1,480（税込）
  //    "standard" = 定価 ¥1,980（税込）← 現在の設定（2026-11-24 に発売記念価格の販売を終了）
  var CHECKOUT_VARIANT = "standard";

  var ENDPOINT = "https://license.mikumiku.online/api/v1/checkout/session";

  // 単品購入・バンドル購入で共通の送信処理。ボタン ID とエラー表示 ID、送信ペイロードだけが異なる。
  function setupBuyButton(buttonId, errorBoxId, payload) {
    var button = document.getElementById(buttonId);
    var errorBox = document.getElementById(errorBoxId);
    if (!button) return;

    button.addEventListener("click", function () {
      if (button.disabled) return; // 二重送信防止

      var originalLabel = button.textContent;
      button.disabled = true;
      button.textContent = document.documentElement.lang === "en" ? "Processing…" : "処理中…";
      if (errorBox) errorBox.hidden = true;

      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.json();
        })
        .then(function (data) {
          if (!data || !data.url) throw new Error("no url in response");
          // 応答の url（Stripe決済ページ）へ遷移する
          location.assign(data.url);
          // 遷移が開始できない場合に備えて元に戻しておく（正常時はページが変わるため見えない）
          button.disabled = false;
          button.textContent = originalLabel;
        })
        .catch(function () {
          button.disabled = false;
          button.textContent = originalLabel;
          if (errorBox) errorBox.hidden = false;
        });
    });
  }

  // 単品購入（Yohaku 買い切り）
  setupBuyButton("buy-button", "buy-error", {
    product: "yohaku",
    plan: "lifetime",
    variant: CHECKOUT_VARIANT
  });

  // バンドル購入（Yohaku＋Megrab Studio セット・¥6,980 税込・1回払い）。
  // 完了画面とライセンスキーの表示は Megrab Studio 公式サイト側で行われる（サーバー側仕様）。
  setupBuyButton("bundle-button", "bundle-buy-error", {
    product: "bundle",
    plan: "lifetime",
    variant: "standard"
  });
})();
