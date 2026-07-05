#!/usr/bin/env node
/**
 * Scaffold a new app: config + privacy/terms markdown.
 *
 * Usage:
 *   npm run new-app <slug> "<Display Name>" [support-email]
 *
 * Example:
 *   npm run new-app my-app "My App Name" support@example.com
 */

import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const [slug, name, supportEmailArg] = process.argv.slice(2);

if (!slug || !name) {
  console.error('Usage: npm run new-app <slug> "<Display Name>" [support-email]');
  process.exit(1);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error('Error: slug must be lowercase alphanumeric with hyphens (e.g. my-app)');
  process.exit(1);
}

const configPath = join(root, 'src/config/apps', `${slug}.ts`);
const contentDir = join(root, 'src/content/legal', slug);
const indexPath = join(root, 'src/config/apps/index.ts');

if (existsSync(configPath) || existsSync(contentDir)) {
  console.error(`Error: app "${slug}" already exists`);
  process.exit(1);
}

const supportEmail = supportEmailArg ?? 'support@example.com';
const tagline = `${name} のサポート・法務ページ`;
const updatedDate = new Date().toISOString().slice(0, 10);
const exportName = slug
  .split('-')
  .map((part, i) => (i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
  .join('');

const replacePlaceholders = (text) =>
  text
    .replaceAll('__APP_SLUG__', slug)
    .replaceAll('__APP_NAME__', name)
    .replaceAll('__APP_TAGLINE__', tagline)
    .replaceAll('__SUPPORT_EMAIL__', supportEmail)
    .replaceAll('__UPDATED_DATE__', updatedDate)
    .replaceAll('__EXPORT_NAME__', exportName);

// App config
const configTemplate = readFileSync(join(root, 'templates/app/app.config.ts'), 'utf8');
writeFileSync(configPath, replacePlaceholders(configTemplate));

// Markdown
mkdirSync(contentDir, { recursive: true });
for (const file of ['privacy.md', 'terms.md']) {
  const template = readFileSync(join(root, 'templates/app', file), 'utf8');
  writeFileSync(join(contentDir, file), replacePlaceholders(template));
}

// Update registry index.ts
let indexSource = readFileSync(indexPath, 'utf8');

const importLine = `import { ${exportName} } from '@/config/apps/${slug}';`;
if (!indexSource.includes(importLine)) {
  indexSource = indexSource.replace(
    "import { lifeOffice } from '@/config/apps/life-office';",
    `import { lifeOffice } from '@/config/apps/life-office';\n${importLine}`,
  );
}

const appsArrayMatch = indexSource.match(/export const apps: AppConfig\[\] = \[([\s\S]*?)\];/);
if (appsArrayMatch) {
  const entries = appsArrayMatch[1]
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (!entries.includes(exportName)) {
    entries.push(exportName);
    indexSource = indexSource.replace(
      /export const apps: AppConfig\[\] = \[[\s\S]*?\];/,
      `export const apps: AppConfig[] = [${entries.join(', ')}];`,
    );
  }
}

writeFileSync(indexPath, indexSource);

console.log(`\nCreated app "${name}" (${slug})\n`);
console.log('Files:');
console.log(`  src/config/apps/${slug}.ts`);
console.log(`  src/content/legal/${slug}/privacy.md`);
console.log(`  src/content/legal/${slug}/terms.md`);
console.log('\nNext steps:');
console.log('  1. Edit privacy.md and terms.md for your app');
console.log(`  2. npm run dev  →  http://localhost:4321/app-legal/${slug}/`);
console.log('  3. git push to deploy via GitHub Actions');
console.log('\nApp Store URLs (after deploy):');
console.log(`  Privacy: https://YOUR_GITHUB_USERNAME.github.io/app-legal/${slug}/privacy/`);
console.log(`  Terms:...`);
