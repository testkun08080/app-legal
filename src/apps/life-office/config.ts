import type { AppConfig } from '../types';
import { defaultTheme } from '../types';

export const app: AppConfig = {
  slug: 'life-office',
  name: 'LIFE OFFICE',
  tagline: '毎朝の出勤儀式を、スマホで。',
  supportEmail: 'support@legal.testkun.net',
  theme: {
    ...defaultTheme,
    bg: '#f7f1e8',
    surface: '#fffaf3',
    text: '#1c1914',
    muted: '#6b6258',
    border: '#e4d8c8',
    accent: '#2d5016',
    link: '#2d5016',
  },
};
