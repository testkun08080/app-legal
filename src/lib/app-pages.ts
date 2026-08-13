import type { AppConfig } from '@/apps/types';
import { getApp } from '@/apps';

/** 静的ルートと衝突させない追加ページ名 */
export const RESERVED_APP_PATHS = new Set(['support', 'privacy', 'terms', 'index']);

type AppAstroModule = {
  default: (props: { app: AppConfig }) => unknown;
};

const landingModules = import.meta.glob<AppAstroModule>('../apps/*/Landing.astro');
const extraPageModules = import.meta.glob<AppAstroModule>('../apps/*/pages/*.astro');

export async function resolveLanding(slug: string) {
  const loader =
    landingModules[`../apps/${slug}/Landing.astro`] ??
    landingModules[`../apps/_default/Landing.astro`];

  if (!loader) {
    throw new Error(`No landing page found for app: ${slug}`);
  }

  const mod = await loader();
  return mod.default;
}

export function extraPagePaths() {
  return Object.entries(extraPageModules).flatMap(([path, loader]) => {
    const match = path.match(/\/apps\/([^/]+)\/pages\/([^/]+)\.astro$/);
    if (!match) return [];

    const [, slug, page] = match;
    if (RESERVED_APP_PATHS.has(page)) return [];

    const app = getApp(slug);
    if (!app) return [];

    return [{ params: { app: slug, slug: page }, props: { app, loader } }];
  });
}
