/* Yohaku 購入ボタン
   ライセンスサーバーで Checkout セッションを作成し、応答の url（Stripe決済ページ）へ遷移する。
   このページで JS を使うのはこの導線のみ。他のページには JS を追加しないこと。 */
(function () {
  "use strict";

  // ▼ 販売中の価格プラン。
  //    "launch"   = 発売記念価格 ¥1,480（税込）← 現在の設定
  //    "standard" = 定価 ¥1,980（税込）
  //    定価販売に切り替えるときは、次の1行の "launch" を "standard" に変えるだけ。
  var CHECKOUT_VARIANT = "launch";

  var ENDPOINT = "https://license.mikumiku.online/api/v1/checkout/session";

  var button = document.getElementById("buy-button");
  var errorBox = document.getElementById("buy-error");
  if (!button) return;

  button.addEventListener("click", function () {
    if (button.disabled) return; // 二重送信防止

    var originalLabel = button.textContent;
    button.disabled = true;
    button.textContent = "処理中…";
    if (errorBox) errorBox.hidden = true;

    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product: "yohaku",
        plan: "lifetime",
        variant: CHECKOUT_VARIANT
      })
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
})();
