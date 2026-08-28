import type { AppConfig } from '@/apps/types';
import { getApp } from '@/apps';
import type { Locale } from '@/config/i18n';

/** 静的ルートと衝突させない追加ページ名 */
export const RESERVED_APP_PATHS = new Set(['support', 'privacy', 'terms', 'index']);

type AppAstroModule = {
  default: (props: { app: AppConfig; locale?: Locale }) => unknown;
};

const landingModules = import.meta.glob<AppAstroModule>('../apps/*/Landing*.astro');
const extraPageModules = import.meta.glob<AppAstroModule>('../apps/*/pages/*.astro');

export async function resolveLanding(slug: string, locale: Locale) {
  const candidates = [
    `../apps/${slug}/Landing.${locale}.astro`,
    `../apps/${slug}/Landing.astro`,
    `../apps/_default/Landing.astro`,
  ];

  for (const key of candidates) {
    const loader = landingModules[key];
    if (loader) {
      const mod = await loader();
      return mod.default;
    }
  }

  throw new Error(`No landing page found for app: ${slug}`);
}

export function extraPagePaths(locale: Locale) {
  return Object.entries(extraPageModules).flatMap(([path, loader]) => {
    const match = path.match(/\/apps\/([^/]+)\/pages\/([^/]+)\.astro$/);
    if (!match) return [];

    const [, slug, page] = match;
    if (RESERVED_APP_PATHS.has(page)) return [];

    const app = getApp(slug);
    if (!app) return [];

    return [{ params: { app: slug, slug: page }, props: { app, loader, locale } }];
  });
}
