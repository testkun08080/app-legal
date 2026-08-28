import { defaultLocale, localeLabels, locales, type Locale } from '@/config/i18n';
import { site } from '@/config/site';
import { ui } from '@/i18n/ui';

export { localeLabels, locales };
export type { Locale };
export type LocalizedString = string | Partial<Record<Locale, string>>;

type UiValue = string | ((...args: never[]) => string);

function getNestedValue(obj: Record<string, unknown>, keyPath: string): UiValue | undefined {
  const parts = keyPath.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== 'object' || !(part in current)) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[part];
  }
  return current as UiValue | undefined;
}

export function t(locale: Locale, key: string, ...args: unknown[]): string {
  const value = getNestedValue(ui[locale] as Record<string, unknown>, key);
  if (typeof value === 'function') {
    return (value as (...fnArgs: unknown[]) => string)(...args);
  }
  if (typeof value === 'string') {
    return value;
  }

  const fallback = getNestedValue(ui[defaultLocale] as Record<string, unknown>, key);
  if (typeof fallback === 'function') {
    return (fallback as (...fnArgs: unknown[]) => string)(...args);
  }
  if (typeof fallback === 'string') {
    return fallback;
  }

  return key;
}

export function resolveLocalized(value: LocalizedString, locale: Locale): string {
  if (typeof value === 'string') {
    return value;
  }

  return value[locale] ?? value[defaultLocale] ?? Object.values(value)[0] ?? '';
}

export function localizePath(path: string, locale: Locale): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  const prefix = locale === defaultLocale ? '' : `${locale}/`;
  return `${base}${prefix}${normalized}`;
}

export function formatDate(date: Date, locale: Locale): string {
  const localeTag = locale === 'ja' ? 'ja-JP' : 'en-US';
  return date.toLocaleDateString(localeTag, { year: 'numeric', month: 'long', day: 'numeric' });
}

export function getAlternateUrls(pathname: string, _currentLocale: Locale): { locale: Locale; href: string }[] {
  const base = import.meta.env.BASE_URL;
  const pathWithoutBase = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const pathWithoutLocale = stripLocalePrefix(pathWithoutBase);

  return locales.map((locale) => ({
    locale,
    href: new URL(localizePath(pathWithoutLocale, locale), site.publicBaseUrl).href,
  }));
}

function stripLocalePrefix(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (normalized === locale || normalized.startsWith(`${locale}/`)) {
      return normalized.slice(locale.length).replace(/^\//, '');
    }
  }
  return normalized;
}

export function localizedApp(app: import('@/apps/types').AppConfig, locale: Locale): import('@/apps/types').ResolvedAppConfig {
  return {
    ...app,
    name: resolveLocalized(app.name, locale),
    tagline: resolveLocalized(app.tagline, locale),
  };
}
