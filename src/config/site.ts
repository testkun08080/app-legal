/**
 * サイト全体の設定 — 初回セットアップ時にここだけ編集してください。
 */
export const site = {
  operatorName: 'testkun08080',
  defaultSupportEmail: '154046906+testkun08080@users.noreply.github.com',
  githubUsername: 'testkun08080',
  repoName: 'app-legal',
  /** 公開 URL（GitHub Pages カスタムドメイン） */
  publicBaseUrl: 'https://legal.testkun.net',
} as const;

export type SiteConfig = typeof site;
