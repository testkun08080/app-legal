export type AppTheme = {
  bg: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  accent: string;
  link: string;
  fontSans?: string;
  radius?: string;
};

export type AppConfig = {
  slug: string;
  name: string;
  tagline: string;
  /** 未指定時は site.defaultSupportEmail を使用 */
  supportEmail?: string;
  theme: AppTheme;
};

export type AppPageProps = {
  app: AppConfig;
};

/** ハブ・未設定アプリ向けのデフォルトトークン（現行 legal デザイン） */
export const defaultTheme: AppTheme = {
  bg: '#faf9f7',
  surface: '#ffffff',
  text: '#1a1a1a',
  muted: '#5c5c5c',
  border: '#e5e2dc',
  accent: '#2d5016',
  link: '#1a5fb4',
};
