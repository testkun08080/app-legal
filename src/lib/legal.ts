import { getCollection } from 'astro:content';
import type { AppConfig } from '@/apps/types';

export async function getLegalDoc(appSlug: string, docType: 'privacy' | 'terms') {
  const docs = await getCollection('legal');
  return docs.find((doc) => doc.data.appSlug === appSlug && doc.data.docType === docType);
}

export function appPaths(apps: AppConfig[]) {
  return apps.map((app) => ({ params: { app: app.slug }, props: { app } }));
}
