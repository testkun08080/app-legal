/**
 * サイト全体の設定 — 初回セットアップ時にここだけ編集してください。
 */
export const site = {
  operatorName: 'testkun08080',
  defaultSupportEmail: 'support@legal.testkun.net',
  githubUsername: 'testkun08080',
  repoName: 'app-legal',
  /** 公開 URL（GitHub Pages カスタムドメイン） */
  publicBaseUrl: 'https://legal.testkun.net',
} as const;

export type SiteConfig = typeof site;
