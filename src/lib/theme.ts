import type { AppTheme } from '@/apps/types';

function themeVars(theme: AppTheme): string[] {
  const vars = [
    `--color-bg: ${theme.bg}`,
    `--color-surface: ${theme.surface}`,
    `--color-text: ${theme.text}`,
    `--color-muted: ${theme.muted}`,
    `--color-border: ${theme.border}`,
    `--color-accent: ${theme.accent}`,
    `--color-link: ${theme.link}`,
  ];

  if (theme.fontSans) {
    vars.push(`--font-sans: ${theme.fontSans}`);
  }

  if (theme.radius) {
    vars.push(`--radius: ${theme.radius}`);
  }

  return vars;
}

/**
 * `<style>` に流し込む用のテーマ定義。インライン style 属性と違い
 * `prefers-color-scheme` のメディアクエリで上書きできます。
 */
export function themeToCss(slug: string, theme: AppTheme, darkTheme?: AppTheme): string {
  const selector = `html[data-app="${slug}"]`;
  const block = (t: AppTheme, scheme: 'light' | 'dark') =>
    `${selector}{color-scheme:${scheme};${themeVars(t).join(';')}}`;

  const light = block(theme, 'light');

  if (!darkTheme) {
    return light;
  }

  return `${light}@media (prefers-color-scheme: dark){${block(darkTheme, 'dark')}}`;
}
