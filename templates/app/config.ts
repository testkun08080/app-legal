import type { AppConfig } from '@/apps/types';
import { defaultTheme } from '@/apps/types';

export const app: AppConfig = {
  slug: '__APP_SLUG__',
  name: '__APP_NAME__',
  tagline: '__APP_TAGLINE__',
  supportEmail: '__SUPPORT_EMAIL__',
  theme: {
    ...defaultTheme,
  },
};
