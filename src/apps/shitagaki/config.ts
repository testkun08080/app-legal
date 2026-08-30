import type { AppConfig } from '@/apps/types';

/**
 * トークンはアプリ本体（photo-diary）の `src/styles/themes.ts` に揃えています。
 * light は `LIGHT_SURFACE` + `ACCENTS.gold`、dark は `DARK_SURFACE` + `ACCENTS.gold` です。
 *
 * `link` にゴールド（accent, #C89F6A）そのものは使いません。クリーム地の上では
 * 小さな文字のコントラストが足りないため、アプリと同じ accentInk を採用しています
 * （light: #8C6026 ≈ 5.2:1 / dark: #E0BC8B）。
 */
export const app: AppConfig = {
  slug: 'shitagaki',
  name: { ja: '下書き', en: 'Draft' },
  tagline: {
    ja: '写真を見ながら話すだけで記事に',
    en: 'Just talk while you look, and get an article',
  },
  supportEmail: 'support@legal.testkun.net',
  // App Store 公開後にここへ配信 URL（https://apps.apple.com/jp/app/id6774141263）を
  // 追加すると、ランディングとナビにダウンロード導線が自動で表示されます。
  theme: {
    bg: '#FFF7EB',
    surface: '#FFFFFF',
    text: '#2E2E2E',
    muted: '#7A6E58',
    border: '#EADFCB',
    accent: '#C89F6A',
    link: '#8C6026',
    fontSans:
      "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic', system-ui, sans-serif",
  },
  darkTheme: {
    bg: '#1A1815',
    surface: '#262320',
    text: '#F2EDE4',
    muted: '#B2A794',
    border: '#3A342C',
    accent: '#C89F6A',
    link: '#E0BC8B',
    fontSans:
      "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic', system-ui, sans-serif",
  },
};
