# NAME_MAP.md — 製品名「Yohaku」出現箇所一覧

製品名を将来変更する場合や表記を点検する場合に、grep と突き合わせて漏れなく確認するための一覧。

- 基本表記: `Yohaku`（ローマ字）
- 読み表記 `（よはく）`: 初出箇所のみに添付（下表「読み付き」参照）
- 検索コマンド例: `grep -rn -i "yohaku\|よはく" index.html checkout.js purchase/ style.css`

## 出現箇所一覧

行番号は最終更新時点（v7: 法務ページ新設・v1.2.0 表記後）のもの。

### index.html

| # | 行 | 場所・要素 | 表記 | 読み付き |
|---|----|-----------|------|----------|
| 1 | 6 | `<title>` | Yohaku（よはく） | あり |
| 2 | 7 | `<meta name="description">` | Yohaku（よはく） | あり |
| 3 | 8 | OGP `<meta property="og:title">` | Yohaku（よはく） | あり |
| 4 | 9 | OGP `<meta property="og:site_name">` | Yohaku | なし |
| 5 | 21 | 構造化データ `Product` の `name` | Yohaku（よはく） | あり |
| 6 | 29 | 構造化データ `Offer` の `url`（サイトURL内） | Yohaku | なし |
| 7 | 40 | ヘッダーロゴ `<a class="brand">` の `aria-label` | Yohaku | なし |
| 8 | 46 | ヘッダーロゴ `<h1 class="brand-name">`（画面表示の初出） | Yohaku | なし |
| 9 | 67 | ヒーロー説明文（本文での初出） | Yohaku（よはく） | あり |
| 10 | 73–74 | ヒーローのダウンロードボタン（Releases URL 内） | Yohaku | なし |
| 10b | 84 | ヒーローの v1.0.0（アップデート確認なし版）リンク（Releases URL 内） | Yohaku | なし |
| 11 | 93 | 画面モックの `role="img"` の `aria-label` | Yohaku | なし |
| 12 | 96 | 画面モックのタイトルバー表示 | Yohaku | なし |
| 13 | 186 | 実物スクリーンショット `img.screenshot-main.png` の `alt` | Yohaku | なし |
| 14 | 200 | 比較表の `<caption>` | Yohaku | なし |
| 15 | 202 | 比較表のヘッダー `<th scope="col">` | Yohaku | なし |
| 16 | 237–238 | 価格カードのダウンロードボタン（Releases URL 内） | Yohaku | なし |
| 16b | 240 | 価格カードの v1.0.0（アップデート確認なし版）リンク（Releases URL 内） | Yohaku | なし |
| 17 | フッター `.footer-dev`／`.copyright` | Yohaku（サイトURL・表記内） | なし |

### checkout.js

| # | 行 | 場所・要素 | 表記 | 読み付き |
|---|----|-----------|------|----------|
| 1 | 1 | 先頭コメント（コード内のみ・表示なし） | Yohaku | なし |
| 2 | 31 | Checkout ボディの `product: "yohaku"`（API パラメータ・変更不可） | yohaku | なし |

### purchase/success/index.html

| # | 行 | 場所・要素 | 表記 | 読み付き |
|---|----|-----------|------|----------|
| 1 | 7 | `<title>`（購入完了 - Yohaku（よはく）） | Yohaku（よはく） | あり |
| 2 | 8 | `<meta name="description">` | Yohaku | なし |
| 3 | 23 | ヘッダー `.brand` のリンク先（サイトURL内） | Yohaku | なし |
| 4 | 29 | ヘッダー `.brand-name` | Yohaku | なし |
| 5 | 40 | 完了カード見出し「Yohaku（よはく） ライセンス」 | Yohaku（よはく） | あり |
| 6 | 50–51 | ダウンロードボタン（Releases URL 内） | Yohaku | なし |
| 7 | 98 | 完了リード文（JS 内 `showSuccess` の表示文） | Yohaku | なし |
| 8 | 123–124 | JS 内コメント・`product === "yohaku"` 判定（API パラメータ・変更不可） | yohaku | なし |

### style.css

| # | 行 | 場所・要素 | 表記 | 読み付き |
|---|----|-----------|------|----------|
| 1 | 1 | 先頭コメント（コード内のみ・表示なし） | Yohaku | なし |

## 方針メモ

- **読み「（よはく）」を添付した箇所**: `<title>`・meta description・og:title・構造化データ `name`（ページのメタ初出）と、本文の初出であるヒーロー説明文、完了ページの `<title>` と完了カード見出し。
- **ヘッダーロゴ（h1）・モック内・比較表など反復表示箇所**はローマ字 `Yohaku` のみで統一。
- **構造化データ（JSON-LD）**は本文に表示されないが、製品名と `Offer.url`（`https://ren9618.github.io/Yohaku/`）を含むため、改名時・URL変更時は必ず更新する。
- フッターの著作権表記 `Copyright (c) 2026 Rayno Works (Ren9618)` は開発者名であり製品名を含まないため、本マップの対象外。
- API パラメータとしての小文字 `yohaku`（checkout.js / 完了ページ JS）はサーバー側と対になる識別子のため、改名時はサーバー側も同時に変更が必要。
- `<html lang="ja">` は日本語固定。og:locale は未指定。

## 関連: 通信に関する表記方針（v1.1.0 以降）

- 「ネットワーク通信なし」「通信を行いません」等の絶対表現は使用しない（v1.0.0 時点の文面を除く）。
- 正しい表現: 「解析データが外部に送信されることはありません」。通信が発生する場面（ライセンス確認・アップデート確認・フィードバックフォーム表示）は FAQ「個人情報やファイル情報が送信されますか？」に集約して記載する。
- 通信表記を変更する際は、特徴セクションの `.policy-list` チップ・価格カード `.price-facts`・FAQ の 3 箇所を揃える。

## 関連: 価格表記の出現箇所

価格を変更する場合は次の 4 箇所を揃える。

| # | ファイル | 場所 | 現在の表記 |
|---|----------|------|-----------|
| 1 | index.html | `<meta name="description">` | 定価1,980円 / 発売記念価格1,480円（リリース日から2週間） |
| 2 | index.html | OGP `og:description` | 買い切り定価1,980円、発売記念価格1,480円 |
| 3 | index.html | 構造化データ `Offer.price` | `"1980"`（JPY・InStock） |
| 4 | index.html | ヒーローの `.hero-price` / 価格セクション `#pricing` / FAQ「無料ですか？」 | ¥1,980 → ¥1,480（税込） |

## 関連: バージョン表記の出現箇所

バージョンを上げる場合は次の箇所を確認する（現在: v1.2.0）。

| # | ファイル | 場所 | 現在の表記 |
|---|----------|------|-----------|
| 1 | index.html | ヒーロー `.dl-note`（現在のバージョン） | 1.2.0 |
| 2 | index.html | 画面モックのタイトルバーバッジ `.tb-badge` | v1.2.0 |
| 3 | index.html | 動作環境 `.section-note`（バージョン 1.2.0 時点） | 1.2.0 |
| 4 | index.html | ヒーロー `.dl-legacy` / 価格カード `.dl-legacy-price`（v1.0.0 固定リンクの版数） | v1.0.0（固定・変更しない） |


## v7 追加分（法務ページ3点・購入前リンク・legal-src 削除）

- 法務ページ `terms/index.html`・`privacy/index.html`・`tokushoho/index.html` を新設。本文は正本テキスト（ドラフト v1）を一字一句変えず HTML 化（条・項の見出し化と特商法の定義リスト化のみ）。生成後に素材フォルダ `legal-src/` は削除済み（GitHub Pages での素材公開防止。正本は別途保管）。
- index.html 価格カードに購入前確認リンク行 `.buy-legal`（利用規約・特商法表記へのリンク。製品名を含まない）を追加。
- index.html フッターに利用規約／プライバシーポリシー／特商法表記／フィードバックフォーム／support@mikumiku.online を追加（URL 内に Yohaku を含むのはフィードバックフォームを除き無し。著作権表記は `© 2026 Rayno Works (Ren9618)` に統一）。

### 法務ページ内の出現箇所

| ファイル | 場所 | 表記 | 読み付き |
|---|------|------|----------|
| terms/index.html | `<title>`・meta description・h1・前文・第1条 | Yohaku（よはく） | あり（title・h1） |
| privacy/index.html | `<title>`・meta description・h1・前文 | Yohaku（よはく） | あり（title・h1） |
| tokushoho/index.html | `<title>`・meta description・h1・商品名・販売URL | Yohaku | あり（title・h1） |

※ 法務ページ本文は正本テキストが正であり、改名時は正本（アプリ repo 側も同一文面）から更新すること。サイト側で単独に表記を変えてはいけない。
