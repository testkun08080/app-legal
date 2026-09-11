---
title: Privacy Policy
appSlug: shitagaki
docType: privacy
locale: en
updated: 2026-09-11
---

> This is a translation of the Japanese original. If the two differ, the [Japanese version](https://legal.testkun.net/shitagaki/privacy/) governs.

## 1. Introduction

Draft (下書き in the Japanese App Store; "the App") respects your privacy. This policy explains what information the App handles.

## 2. Information we collect

The App **does not require an account**. Drafts, photo references, recordings and memos are, as a rule, stored **on your device** (in SQLite and similar local storage). We do not collect your name or email address.

| Data | Purpose | Where it is stored |
|------|---------|--------------------|
| Drafts (title, outline, memos) | Providing the App's features | SQLite on your device |
| Photo references (images on your device) | Showing and exporting the photos used in an article | On your device. **Photo files are never sent to our servers** |
| Recordings and transcripts | Input while you talk | On your device. Transcription runs on the device |
| Capture time and place name (optional) | On-screen display and as a hint for AI outline generation | On your device. You can turn off sending it to the AI |
| AI outline generation counts | Calculating what is left of the free and monthly quotas | SQLite on your device (counts only; generated content is not recorded) |
| App settings (theme, export quality and so on) | Keeping your preferences | On your device |
| Purchase state | Deciding which purchased features are unlocked | RevenueCat, under an anonymous ID that is not tied to an account |

## 3. What is sent out for AI outline generation

Only when you run AI outline generation, the following text is sent to **Groq via a Cloudflare Worker**.

- The title, memo text and outline instructions
- The capture time
- An optional place name (latitude and longitude are never sent; you can turn this off on the outline screen)

**Photo files themselves are not sent.** Audio is not sent either — transcription happens on the device.

The Worker's operational logs may record processing volume such as token counts, estimated cost and the number of photos. Memo text and titles are not written to those logs.

## 4. Third-party services

| Service | Purpose | Provider |
|---------|---------|----------|
| Apple App Store | Processing in-app purchases | Apple Inc. |
| RevenueCat | Checking purchase state | RevenueCat, Inc. |
| Cloudflare Workers | Relaying AI outline generation | Cloudflare, Inc. |
| Groq | Generating the article outline | Groq, Inc. |

Information handled by each service is subject to that service's own privacy policy.

- Apple: https://www.apple.com/legal/privacy/
- RevenueCat: https://www.revenuecat.com/privacy
- Cloudflare: https://www.cloudflare.com/privacypolicy/
- Groq: https://groq.com/privacy-policy

## 5. Device permissions

The App may ask for the permissions below, always after explaining why it needs them. The App still launches if you decline, and the other features keep working.

- **Photo library**: picking the photos used in an article
- **Microphone**: recording while you talk
- **Speech recognition**: transcribing what you recorded

**The App never asks for location permission.** When a photo carries a capture location, the App may show a place name derived from it, but it does not request Location Services access.

## 6. Tracking

The App does not serve ads and does not track you for advertising. App Tracking Transparency (ATT) is not used. No analytics SDK is embedded.

## 7. Retention and deletion

Data on your device stays there until you delete it. Drafts can be deleted in the App at any time, and **removing the App from your device deletes everything it stored locally**.

Text sent for AI outline generation is processed to return the response and is not stored on our servers. Purchase state is retained by Apple and RevenueCat.

## 8. Children

The App is not directed at any particular age group, and we do not knowingly collect personal information from children under 13.

## 9. Changes to this policy

If we change this policy we will update this page and revise the last-updated date shown at the top. Significant changes will also be noted in the App's release notes.

## 10. Contact

For questions about this policy, please use the [support page](https://legal.testkun.net/en/shitagaki/support/) or the email address at the bottom of this page.
