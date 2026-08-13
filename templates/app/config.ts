import type { AppConfig } from '../types';
import { defaultTheme } from '../types';

export const app: AppConfig = {
  slug: '__APP_SLUG__',
  name: '__APP_NAME__',
  tagline: '__APP_TAGLINE__',
  supportEmail: '__SUPPORT_EMAIL__',
  theme: {
    ...defaultTheme,
  },
};
