import type { AppTheme } from '@/apps/types';

export function themeToStyle(theme: AppTheme): string {
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

  return vars.join('; ');
}
