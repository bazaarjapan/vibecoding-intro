# リファレンス

## このページの役割
- 新メンバー向けのスタート地点として、必須リンクや用語をここで確認できるようにします。
- 内容を更新したら Pull Request の説明欄に差分概要とローカルで実行したコマンドを記載し、レビュアーに確認を依頼してください。

## ドキュメントとアセットの配置
- `docs/guide/` には運用ガイドを追加します。新しい章を作るときはファイル名をケバブケース（例: `docs/guide/release-flow.md`）に揃え、`.vitepress/config.ts` のサイドバーへ追記します。
- 共有画像やアイコンは `docs/public/` に保存し、Markdown から相対パスで参照します。
- 共同編集したテンプレート類は `docs/templates/`（未作成の場合は新規作成）に置き、ここからリンクします。

## テンプレートとチェックリスト
- 用語集: プロジェクト特有の略語・設定値を追記し、README と二重管理にならないよう整備します。
- Issue/Pull Request テンプレート: フォーマットを保管し、実際に更新したら `.github/` 配下にも反映します。
- リリースチェック: ビルド、リンク切れ確認、翻訳レビューなど必須項目を表形式で整理し、完了日と担当者を残します。

## Codex CLIセットアップ

### 必要環境
- Node.js は v22 以上が必須です。`node -v` で確認し、バージョンが足りない場合は `nvm install 22` などでアップデートします。citeturn8view0
- npm が同梱されていることを確認し、グローバルパッケージが書き込めるディレクトリ（例: `~/.npm-global` や `%USERPROFILE%\AppData\Roaming\npm`）の PATH を通します。citeturn8view0

### macOS
1. ターミナルで `node --version` を実行し、v22 以上なら次へ進みます。古い場合は Homebrew を導入し（`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`）、`brew install node` 後に再確認します。citeturn11view0
2. `npm install -g @openai/codex` を実行し、インストール完了後に `codex` コマンドが呼び出せるか確認します。citeturn11view0
3. 初回起動時はセーフモードの「2」を選び、表示される作業ディレクトリがリポジトリと一致するかを確認してから `Enter` で開始します。citeturn11view0

### Windows
1. Windows Terminal（PowerShell）で `node -v` を確認し、v22 未満なら「設定 > システム > バージョン情報」で CPU アーキテクチャを確認後、公式サイトから対応する Node.js インストーラを取得して再度バージョンをチェックします。citeturn10view0
2. 管理者権限の PowerShell で `npm install -g @openai/codex` を実行し、完了後に `codex` が呼び出せるか確認します。citeturn10view0
3. 初回起動時の確認プロンプトには `y` で進み、表示された作業フォルダがプロジェクト用ディレクトリになっているか必ず見直してください。citeturn10view0

### 初回起動とプロジェクト準備
- `codex` を起動したら、画面の案内に沿って OpenAI アカウントで認証し、プロジェクトのルートを選択します。
- リポジトリ固有の環境変数（例: `DOCS_BASE=/vibecoding-intro/`）を `.env` や PowerShell の `$env:DOCS_BASE` に設定し、`codex` から実行するビルドコマンドでも同じ値が使われるか確認します。citeturn8view0
- セッションを再開する場合は `codex resume` を使うと前回のコンテキストを引き継げます。citeturn8view0

## よくあるトラブル
- Node.js のバージョンが足りない/パスが通っていない: `nvm use 22` またはインストーラを再実行し、`where node`（Windows）/`which node`（macOS）で参照先を確認します。citeturn8view0
- `codex` が見つからない: `npm root -g` を確認し、パスを `export PATH=$(npm root -g)/../bin:$PATH`（macOS）や `setx PATH "%PATH%;%APPDATA%\npm"`（Windows）で追加します。citeturn8view0
- 初回起動で正しいディレクトリが選べていない: `codex` の終了後に再度起動し、プロンプトでリポジトリルートを選び直します。citeturn10view0
