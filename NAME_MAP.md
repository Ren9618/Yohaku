# NAME_MAP.md — 製品名「Yohaku」出現箇所一覧

製品名を将来変更する場合や表記を点検する場合に、grep と突き合わせて漏れなく確認するための一覧。

- 基本表記: `Yohaku`（ローマ字）
- 読み表記 `（よはく）`: 初出箇所のみに添付（下表「読み付き」参照）
- 検索コマンド例: `grep -rn -i "yohaku\|よはく" index.html checkout.js purchase/ style.css`

## 出現箇所一覧

行番号は最終更新時点（v5: 公開時修正後）のもの。

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
| 11 | 89 | 画面モックの `role="img"` の `aria-label` | Yohaku | なし |
| 12 | 92 | 画面モックのタイトルバー表示 | Yohaku | なし |
| 13 | 177 | 実物スクリーンショット `img.screenshot-main.png` の `alt` | Yohaku | なし |
| 14 | 191 | 比較表の `<caption>` | Yohaku | なし |
| 15 | 193 | 比較表のヘッダー `<th scope="col">` | Yohaku | なし |
| 16 | 227–228 | 価格カードのダウンロードボタン（Releases URL 内） | Yohaku | なし |

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

## 関連: 価格表記の出現箇所

価格を変更する場合は次の 4 箇所を揃える。

| # | ファイル | 場所 | 現在の表記 |
|---|----------|------|-----------|
| 1 | index.html | `<meta name="description">` | 定価1,980円 / 発売記念価格1,480円（リリース日から2週間） |
| 2 | index.html | OGP `og:description` | 買い切り定価1,980円、発売記念価格1,480円 |
| 3 | index.html | 構造化データ `Offer.price` | `"1980"`（JPY・InStock） |
| 4 | index.html | ヒーローの `.hero-price` / 価格セクション `#pricing` / FAQ「無料ですか？」 | ¥1,980 → ¥1,480（税込） |

## 関連: バージョン表記の出現箇所

バージョンを上げる場合は次の箇所を確認する。

| # | ファイル | 場所 | 現在の表記 |
|---|----------|------|-----------|
| 1 | index.html | ヒーロー `.dl-note`（現在のバージョン） | 1.0.0 |
| 2 | index.html | 画面モックのタイトルバーバッジ `.tb-badge` | v1.0.0 |
| 3 | index.html | 動作環境 `.section-note`（バージョン 1.0.0 時点） | 1.0.0 |
