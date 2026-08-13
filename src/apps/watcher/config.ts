import type { AppConfig } from '../types';
import { defaultTheme } from '../types';

export const app: AppConfig = {
  slug: 'watcher',
  name: 'Watcher',
  tagline: 'Watcher のサポート・法務ページ',
  supportEmail: 'support@legal.testkun.net',
  theme: {
    ...defaultTheme,
    bg: '#eef2f6',
    surface: '#ffffff',
    text: '#0f1720',
    muted: '#5b6775',
    border: '#d5dde6',
    accent: '#0f2744',
    link: '#1d4e89',
    fontSans: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    radius: '0.375rem',
  },
};
