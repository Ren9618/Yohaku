# NAME_MAP.md — 製品名「Yohaku」出現箇所一覧

製品名を将来変更する場合や表記を点検する場合に、grep と突き合わせて漏れなく確認するための一覧。

- 基本表記: `Yohaku`（ローマ字）
- 読み表記 `（よはく）`: 初出箇所のみに添付（下表「読み付き」参照）
- 検索コマンド例: `grep -n -i "yohaku\|よはく" index.html style.css`

## 出現箇所一覧

| # | ファイル | 行 | 場所・要素 | 表記 | 読み付き |
|---|----------|----|-----------|------|----------|
| 1 | index.html | 6 | `<title>` | Yohaku（よはく） | あり |
| 2 | index.html | 7 | `<meta name="description">` | Yohaku（よはく） | あり |
| 3 | index.html | 8 | OGP `<meta property="og:title">` | Yohaku（よはく） | あり |
| 4 | index.html | 9 | OGP `<meta property="og:site_name">` | Yohaku | なし |
| 5 | index.html | 23 | ヘッダーロゴ `<a class="brand">` の `aria-label` | Yohaku | なし |
| 6 | index.html | 29 | ヘッダーロゴ `<h1 class="brand-name">`（画面表示の初出） | Yohaku | なし |
| 7 | index.html | 49 | ヒーロー説明文（本文での初出） | Yohaku（よはく） | あり |
| 8 | index.html | 59 | 画面モックの `role="img"` の `aria-label` | Yohaku | なし |
| 9 | index.html | 62 | 画面モックのタイトルバー表示 | Yohaku | なし |
| 10 | index.html | 169 | 比較表の `<caption>` | Yohaku | なし |
| 11 | index.html | 171 | 比較表のヘッダー `<th scope="col">` | Yohaku | なし |
| 12 | style.css | 1 | 先頭コメント（コード内のみ・表示なし） | Yohaku | なし |

## 方針メモ

- **読み「（よはく）」を添付した箇所**: `<title>`・meta description・og:title（ページのメタ初出）と、本文の初出であるヒーロー説明文（7 行目）。表示面ではヒーローの 1 箇所のみ。
- **ヘッダーロゴ（h1）・モック内・比較表など反復表示箇所**はローマ字 `Yohaku` のみで統一。
- フッターの著作権表記 `Copyright (c) 2026 Rayno Works (Ren9618)` は開発者名であり製品名を含まないため、本マップの対象外。
- `<html lang="ja">`・`<meta property="og:locale">` 未指定の og:locale は現状なし（日本語固定）。
