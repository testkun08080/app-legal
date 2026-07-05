import { site } from '@/config/site';
import type { AppConfig } from '@/config/apps/types';
import { lifeOffice } from '@/config/apps/life-office';

export type { AppConfig } from '@/config/apps/types';

/** 登録アプリ一覧 — new-app スクリプトが追記します */
export const apps: AppConfig[] = [lifeOffice];

export function getApp(slug: string): AppConfig | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getSupportEmail(app: AppConfig): string {
  return app.supportEmail ?? site.defaultSupportEmail;
}

export function getSiteBaseUrl(): string {
  return `https://${site.githubUsername}.github.io/${site.repoName}`;
}

export function getAppUrl(slug: string, path?: string): string {
  const base = getSiteBaseUrl();
  const segment = path ? `/${path.replace(/^\//, '')}` : '';
  return `${base}/${slug}${segment}`;
}
