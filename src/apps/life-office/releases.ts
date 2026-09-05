import type { Locale } from '@/config/i18n';

export type Release = {
  version: string;
  /** ISO 8601 (YYYY-MM-DD) */
  date: string;
  highlights: Record<Locale, string[]>;
};

/**
 * 公開済みリリースの一覧（新しい順）。
 * 文面の正本は shukkin-kidou の `docs/store-listing.md`（What's New）と
 * `docs/ads-deferred.md`（広告の配置方針）です。
 */
export const releases: Release[] = [
  {
    version: '1.3.0',
    date: '2026-09-05',
    highlights: {
      ja: [
        '無料プランにバナー広告を追加しました（記録・検索・設定、およびレシート画面のカード外）',
        'LIFE OFFICE Pro で広告を非表示にできます',
        '出勤タブと打刻の儀式には広告を出しません',
        'ライト / ダークテーマの手動切り替えを Pro の機能にしました（無料プランはシステムの外観に追従します）',
        'アプリ内に FAQ を追加しました',
        'スワイプ打刻の画面で文字が重なる問題を修正しました',
      ],
      en: [
        'Banner ads on the free plan (Records, Search, Settings, and outside the receipt card)',
        'LIFE OFFICE Pro removes ads',
        'No ads on the home punch tab or during the punch ritual',
        'Manual light / dark theme switching is now a Pro feature (the free plan follows your system appearance)',
        'Added an in-app FAQ',
        'Fixed overlapping text on the swipe punch screen',
      ],
    },
  },
  {
    version: '1.1.0',
    date: '2026-08-27',
    highlights: {
      ja: [
        '日本語 / 英語に対応。端末の言語に追従し、設定からいつでも切り替えできます',
        'レシートのバーコードをテンプレート選択に変更（年月日時刻／名前＋日時／名前のみ）',
      ],
      en: [
        'Japanese and English — follows your device language, or switch anytime in Settings',
        'Receipt barcode is now chosen from templates (date & time / name + date & time / name only)',
      ],
    },
  },
  {
    version: '1.0.0',
    date: '2026-08-15',
    highlights: {
      ja: ['App Store で公開しました'],
      en: ['First release on the App Store'],
    },
  },
];
