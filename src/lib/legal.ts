import { getCollection } from 'astro:content';
import type { AppConfig } from '@/apps/types';
import { defaultLocale, type Locale } from '@/config/i18n';

export async function getLegalDoc(appSlug: string, docType: 'privacy' | 'terms', locale: Locale) {
  const docs = await getCollection('legal');
  const match = docs.find(
    (doc) => doc.data.appSlug === appSlug && doc.data.docType === docType && doc.data.locale === locale,
  );
  if (match) return match;

  if (locale !== defaultLocale) {
    return docs.find(
      (doc) =>
        doc.data.appSlug === appSlug && doc.data.docType === docType && doc.data.locale === defaultLocale,
    );
  }

  return undefined;
}

export function appPaths(apps: AppConfig[], locale: Locale) {
  return apps.map((app) => ({ params: { app: app.slug }, props: { app, locale } }));
}
