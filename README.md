# app-legal

App Store 提出用のプライバシーポリシー・利用規約・サポートページを、**アプリ slug ごと**に公開する Astro サイトです。

## 公開URL

現在の設定はカスタムドメイン運用です。

- サイト: `https://legal.testkun.net/`
- 例: `https://legal.testkun.net/life-office/privacy/`

> `astro.config.mjs` は `base: '/'` です。サブパス（`/app-legal`）前提ではありません。

## 前提環境

- Node.js 22 以上（CI では Node.js 22 を利用）
- npm 10 以上を推奨

## 初回セットアップ

### 1. 依存関係をインストール

```bash
npm install
```

### 2. サイト設定を更新

[`src/config/site.ts`](src/config/site.ts) を開き、公開用の情報に置き換えてください。

```ts
export const site = {
  operatorName: 'Your Name or Brand',
  defaultSupportEmail: 'support@example.com',
  githubUsername: 'your-github-username',
  repoName: 'app-legal',
  publicBaseUrl: 'https://example.com',
} as const;
```

[`astro.config.mjs`](astro.config.mjs) の `site` も合わせて更新します。

```js
site: 'https://example.com',
base: '/',
```

### 3. ローカル確認

```bash
npm run dev
```

`http://localhost:4321/` で確認できます。

### 4. GitHub Pages デプロイ

1. リポジトリを GitHub に push
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. `main` ブランチへ push すると [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) がデプロイ

カスタムドメインを使う場合は [`public/CNAME`](public/CNAME) を実運用のドメインに合わせて設定してください。

## 新しいアプリを追加

```bash
npm run new-app <slug> "<表示名>" [support-email]
```

例:

```bash
npm run new-app my-app "My App Name" support@example.com
```

生成されるファイル:

- `src/config/apps/<slug>.ts`
- `src/content/legal/<slug>/privacy.md`
- `src/content/legal/<slug>/terms.md`

`src/config/apps/index.ts` の registry 追記も自動で行われます。

追加後の作業:

1. `privacy.md` / `terms.md` を編集
2. `npm run dev` で表示確認
3. `git push` でデプロイ

## コマンド

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバー |
| `npm run check` | 型/設定チェック |
| `npm run lint` | 静的チェック |
| `npm run test` | 現在は `check` を実行 |
| `npm run build` | 静的サイト生成（`dist/`） |
| `npm run preview` | ビルド結果のプレビュー |
| `npm run new-app` | 新アプリ scaffold |

## 環境変数について

現状このテンプレートは `.env` 必須ではありません。  
必要になった場合は `.env` を使い、秘密情報は絶対にコミットしないでください。

## npm 公開について

`package.json` は `"private": true` のままです。  
これは npm パッケージとしての誤公開防止であり、GitHub リポジトリ公開とは独立した設定です。

## ライセンス

[MIT](LICENSE)
