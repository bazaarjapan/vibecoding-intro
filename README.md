# Vibecoding Manual

VitePressを使ってvibecodingマニュアルを作成し、GitHub Pagesで公開するためのリポジトリ構成です。

## 必要環境

- Node.js 18以上（最新のLTS推奨）
- npm 9以上

初回セットアップ:

```bash
npm install
```

ローカルプレビュー:

```bash
npm run docs:dev
```

本番ビルド:

```bash
npm run docs:build
```

GitHub Pagesへデプロイするには、`main`ブランチにプッシュすると`.github/workflows/deploy.yml`が自動で走り、`gh-pages`ブランチへ公開されます。必要に応じて`DOCS_BASE`環境変数をGitHub Actionsのリポジトリシークレットに設定し、`/<リポジトリ名>/`の形式を指定してください。

## ディレクトリ構成

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.ts
│  ├─ guide
│  │  ├─ faq.md
│  │  ├─ how-to-use.md
│  │  ├─ intro.md
│  │  ├─ reference.md
│  │  └─ style-guide.md
│  ├─ index.md
│  └─ public
│     └─ logo.svg
├─ .github
│  └─ workflows
│     └─ deploy.yml
├─ .gitignore
└─ package.json
```

## GitHub Pages設定のヒント

1. リポジトリの`Settings > Pages`で「Build and deployment」を`GitHub Actions`に切り替えます。
2. リポジトリが`<user>.github.io`形式なら`DOCS_BASE=/`でOKです。プロジェクトリポジトリの場合は`DOCS_BASE=/<repo>/`を設定します。
3. `npm ci`を使うために`package-lock.json`をコミットしてください。

## 次のTODO例

- faviconの追加（`docs/public/favicon.ico`）
- チーム独自の章立てやテンプレートの追記
- 自動リンクチェックやプレビューコメントのWorkflow拡張
