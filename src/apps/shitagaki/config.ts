import type { AppConfig } from '@/apps/types';
import { defaultTheme } from '@/apps/types';

export const app: AppConfig = {
  slug: 'shitagaki',
  name: '下書き',
  tagline: '写真を見ながら話すだけで記事に',
  supportEmail: 'support@legal.testkun.net',
  theme: {
    ...defaultTheme,
    bg: '#FFF7EB',
    surface: '#FFFFFF',
    text: '#2E2E2E',
    muted: '#7A6E58',
    border: '#EADFCB',
    accent: '#C89F6A',
    link: '#8C6026',
  },
};
