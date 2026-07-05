export type AppConfig = {
  slug: string;
  name: string;
  tagline: string;
  /** 未指定時は site.defaultSupportEmail を使用 */
  supportEmail?: string;
};
