---
title: プライバシーポリシー
appSlug: watcher
docType: privacy
updated: 2026-07-08
---

## 1. はじめに

Watcher（以下「本アプリ」）は、ユーザーのプライバシーを尊重します。本ポリシーは、本アプリがどのような情報を扱うかを説明するものです。

## 2. 収集する情報

本アプリは、サインイン機能および同期機能を提供するため、以下の情報を取り扱います。

| データ | 用途 | 保存場所 |
|--------|------|----------|
| 認証情報（ユーザー ID、メールアドレス等） | サインイン・本人識別 | Clerk（認証基盤） |
| 監視テーマ・レポート・設定データ | アプリ機能提供、端末間同期 | 端末内 SQLite / API サーバー（Cloudflare Workers, D1） |
| デバイス識別子・Push トークン | 通知配信先の識別 | API サーバー（Cloudflare Workers, D1） |
| 購入状態（サブスクリプション） | Pro 機能の提供、購入状態確認 | RevenueCat / Apple App Store |

## 3. 第三者サービス

| サービス | 目的 | 提供者 |
|----------|------|--------|
| Clerk | 認証（サインイン） | Clerk, Inc. |
| Cloudflare Workers / D1 | API・データ同期基盤 | Cloudflare, Inc. |
| RevenueCat / Apple App Store | App 内課金の処理・購入状態の確認 | RevenueCat, Inc. / Apple Inc. |
| Expo Push Service | Push 通知配信 | Expo / Expo Platform Inc. |

各サービスで取り扱われる情報は、それぞれのプライバシーポリシーに従います。

- Clerk: https://clerk.com/legal/privacy
- Cloudflare: https://www.cloudflare.com/privacypolicy/
- RevenueCat: https://www.revenuecat.com/privacy
- Apple: https://www.apple.com/legal/privacy/
- Expo: https://expo.dev/privacy

## 4. 端末の権限

本アプリは以下の権限を要求する場合があります。

- 通知: レポート通知の受信
- Apple アカウント情報: Apple サインイン利用時の認証
- Google アカウント情報: Google サインイン利用時の認証

## 5. トラッキング

本アプリは、ユーザーを横断的に追跡する広告目的のトラッキングは行いません。

## 6. データの削除

アプリを端末から削除すると端末内データは削除されます。サーバー上のアカウント関連データの取り扱いについては、サポート窓口までお問い合わせください。

## 7. お問い合わせ

本ポリシーに関するお問い合わせは、ページ下部のメールアドレスまでご連絡ください。
