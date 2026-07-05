# app-legal

App Store 提出用のプライバシーポリシー・利用規約・サポートページを、**アプリ slug ごと**に GitHub Pages で公開する Astro サイトです。

## URL 構造

```
https://{github-username}.github.io/app-legal/                    # アプリ一覧
https://{github-username}.github.io/app-legal/life-office/        # サポート
https://{github-username}.github.io/app-legal/life-office/privacy/
https://{github-username}.github.io/app-legal/life-office/terms/
```

## 初回セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. サイト設定を編集

[`src/config/site.ts`](src/config/site.ts) を開き、以下を実際の値に差し替えます。

```ts
export const site = {
  operatorName: 'あなたの名前または屋号',
  defaultSupportEmail: 'support@example.com',
  githubUsername: 'your-github-username',
  repoName: 'app-legal',
} as const;
```

[`astro.config.mjs`](astro.config.mjs) の `site` も合わせて更新してください。

```js
site: 'https://your-github-username.github.io',
base: '/app-legal',
```

### 3. ローカルプレビュー

```bash
npm run dev
```

http://localhost:4321/app-legal/ で確認できます。

### 4. GitHub Pages デプロイ

1. リポジトリを GitHub に push
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. `main` ブランチへ push すると [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) が自動デプロイ

## 新しいアプリを追加

```bash
npm run new-app <slug> "<表示名>" [support-email]
```

例:

```bash
npm run new-app my-app "My App Name" support@example.com
```

生成されるファイル:

- `src/config/apps/<slug>.ts` — アプリメタデータ（supportEmail はアプリ別に設定可）
- `src/content/legal/<slug>/privacy.md`
- `src/content/legal/<slug>/terms.md`

`src/config/apps/index.ts` への registry 追記も自動で行われます。

### 追加後の作業

1. `privacy.md` / `terms.md` の本文をアプリに合わせて編集
2. `npm run dev` で表示確認
3. `git push` でデプロイ

## LIFE OFFICE（同梱サンプル）

初回同梱の `life-office` には、LIFE OFFICE 向けの文案が入っています。

| ページ | パス |
|--------|------|
| サポート | `/life-office/` |
| プライバシーポリシー | `/life-office/privacy/` |
| 利用規約 | `/life-office/terms/` |

### アプリ側（legal.ts）への URL 例

デプロイ後、LIFE OFFICE リポジトリの `src/constants/legal.ts` に以下を設定:

```ts
export const PRIVACY_POLICY_URL =
  'https://your-github-username.github.io/app-legal/life-office/privacy/';
export const TERMS_URL =
  'https://your-github-username.github.io/app-legal/life-office/terms/';
export const SUPPORT_EMAIL = 'support@example.com';
```

App Store Connect:

| フィールド | URL |
|-----------|-----|
| プライバシーポリシー URL | 上記 privacy URL |
| サポート URL | `https://your-github-username.github.io/app-legal/life-office/` |

## プロジェクト構成

```
src/
├── config/
│   ├── site.ts              # 運営者・デフォルトメール・GitHub ユーザー名
│   └── apps/                # アプリ registry（1 アプリ = 1 ファイル）
├── content/legal/{slug}/    # privacy.md / terms.md
├── layouts/LegalLayout.astro
├── lib/legal.ts
└── pages/
    ├── index.astro          # アプリ一覧
    └── [app]/               # support / privacy / terms
```

## コマンド

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバー |
| `npm run build` | 静的サイト生成（`dist/`） |
| `npm run preview` | ビルド結果のプレビュー |
| `npm run new-app` | 新アプリ scaffold |

## ライセンス

Private — 個人利用向けテンプレート
