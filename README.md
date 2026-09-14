# AtRecorder

AtCoderで解いた問題についてのメモや、問題のタグ付けをして分類を行えるwebアプリ

## 目次

- [機能](#機能)
- [技術スタック](#技術スタック)
- [ディレクトリ構成](#ディレクトリ構成)
- [開発環境のセットアップ](#開発環境のセットアップ)
- [使い方](#使い方)
- [データの保存について](#データの保存について)
- [開発コマンド](#開発コマンド)
- [コーディング規約](#コーディング規約)

## 機能

- 問題の追加・編集・削除
- AtCoder の問題 URL からコンテスト名・問題タイトルの自動入力
- タグによるフィルタリング
- タイトルのキーワード検索
- 解いたかどうか（Solved / Unsolved）の管理

## 技術スタック

| 分類 | 使用技術 |
| --- | --- |
| フレームワーク | [Next.js](https://nextjs.org/) 16 (App Router) |
| 言語 | [TypeScript](https://www.typescriptlang.org/) |
| UI ライブラリ | [React](https://react.dev/) 19 |
| スタイリング | [Tailwind CSS](https://tailwindcss.com/) v4 |
| コンポーネント | [shadcn/ui](https://ui.shadcn.com/)（[Base UI](https://base-ui.com/) ベース） |
| アイコン | [lucide-react](https://lucide.dev/) |
| Lint / Format | [Biome](https://biomejs.dev/) |
| パッケージマネージャ | [pnpm](https://pnpm.io/) |
| 外部 API | [AtCoder Problems API](https://github.com/kenkoooo/AtCoderProblems)（問題情報の自動取得） |

データベースは使用せず、ブラウザの `localStorage` にデータを保存するクライアントサイド完結のアプリです（詳細は[データの保存について](#データの保存について)を参照）。

## 開発環境のセットアップ

このプロジェクトは pnpm を使用しています。

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて動作を確認してください。

## 使い方

<!-- TODO: 実際の操作手順・スクリーンショットなどがあれば追記してください -->

1. **問題を追加する**
   - 画面上部の `Add` ボタンからダイアログを開く
   - コンテスト名・問題番号・タイトルを入力
   - 問題リンク欄に AtCoder の問題 URL（例: `https://atcoder.jp/contests/abc333/tasks/abc333_d`）を貼り付け、更新ボタン（🔄）を押すとコンテスト名・タイトルが自動入力される
   - 該当するタグを選択して `Add` で保存
2. **問題を編集する**
   - 各問題カードの編集アイコンからダイアログを開き、内容を更新して `Change` で保存
3. **問題を検索・絞り込む**
   - 左側の検索ボックスでタイトルのキーワード検索
   - タグを選択すると AND 条件で絞り込み

## データの保存について

- 問題データはサーバーやデータベースを介さず、ブラウザの `localStorage`（キー: `problems`）に保存されます（[`src/lib/storage.ts`](./src/lib/storage.ts)）。
- そのため、**別のブラウザ・別の端末とはデータが共有されません**。また、ブラウザのデータを消去すると記録も消えます。
- AtCoder の問題情報の自動入力には [AtCoder Problems](https://kenkoooo.com/atcoder/) が提供する問題一覧 JSON を利用しています（[`src/lib/atcoderProblems.ts`](./src/lib/atcoderProblems.ts)）。

## 開発コマンド

| コマンド | 説明 |
| --- | --- |
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | 本番用ビルドを作成 |
| `pnpm start` | ビルド済みアプリを起動 |
| `pnpm lint` | Biome によるコードチェック |
| `pnpm format` | Biome によるフォーマット（自動修正） |

<!-- TODO: レビュー観点やブランチ運用など、チーム独自のルールがあれば追記してください -->
