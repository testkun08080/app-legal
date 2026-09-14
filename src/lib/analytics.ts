import { locales } from '@/config/i18n';

export type PageKind = 'hub' | 'landing' | 'privacy' | 'terms' | 'support' | 'other';

export interface PageAnalytics {
  /** App slug, or `hub` for the site index. */
  appSlug: string;
  pageKind: PageKind;
}

const localeSet = new Set<string>(locales);
const pageKindSet = new Set<string>(['privacy', 'terms', 'support']);

/**
 * Derive GA content group / custom params from the URL (and optional known slug).
 */
export function parsePageAnalytics(pathname: string, knownAppSlug?: string): PageAnalytics {
  const segments = pathname.split('/').filter(Boolean);

  let i = 0;
  if (segments[i] && localeSet.has(segments[i])) {
    i += 1;
  }

  const first = segments[i];
  if (!first) {
    return { appSlug: 'hub', pageKind: 'hub' };
  }

  // Skip locale codes that somehow remain; treat reserved legal words without an app as hub/other
  if (localeSet.has(first)) {
    return { appSlug: 'hub', pageKind: 'hub' };
  }

  const appSlug = knownAppSlug ?? first;
  const rest = segments.slice(i + 1);
  const last = rest[rest.length - 1];

  if (!last) {
    return { appSlug, pageKind: 'landing' };
  }

  if (pageKindSet.has(last)) {
    return { appSlug, pageKind: last as PageKind };
  }

  return { appSlug, pageKind: 'other' };
}
