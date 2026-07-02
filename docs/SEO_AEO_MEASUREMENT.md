# SEO/AEO Measurement Plan

This project now has a public resource architecture for search and AI answer engines:

- Resource hub: `/resources`
- Pillar guides: `/resources/*`
- Topic clusters: `/resources/topics/*`
- Practical templates: `/resources/templates/*`
- Commercial search pages: `/resources/solutions/*`
- Operational glossary: `/resources/terms`
- Machine-readable discovery: `/llms.txt` and `/sitemap.xml`

## Search Console Setup

The remaining external setup requires property-owner access in Google Search Console:

1. Add the domain property `qaydalaqar.com`.
2. Verify ownership using DNS verification, or a URL-prefix verification method if DNS is not available.
3. Submit `https://qaydalaqar.com/sitemap.xml`.
4. Inspect and request indexing for:
   - `https://qaydalaqar.com/resources/`
   - `https://qaydalaqar.com/resources/terms/`
   - The three pillar guides.
   - The three commercial search pages.

## AI Visibility Setup

The remaining external setup requires webmaster-owner access:

1. Add `qaydalaqar.com` in Bing Webmaster Tools.
2. Submit `https://qaydalaqar.com/sitemap.xml`.
3. Review Bing AI Performance when available for the property.
4. Track cited pages, grounding phrases, and pages that receive search impressions but no AI citations.
5. Keep `https://qaydalaqar.com/llms.txt` public and update it whenever new pillar or solution pages are added.

## Structured Data Note

The resource pages include visible FAQ sections and matching `FAQPage` schema.org markup for machine clarity. Do not treat this as a Google rich-result promise: Google removed the FAQ rich result feature from its Search documentation in 2026. The durable value is clearer page structure, visible answers, and easier parsing by crawlers and answer engines.

## Weekly Review

Review every week after indexing starts:

- Queries with impressions but low CTR.
- Pages with impressions but average position lower than 20.
- Pages with rising impressions but no clicks.
- Queries that reveal missing pages or missing FAQ answers.
- Pages that attract irrelevant impressions and need tighter titles or descriptions.
- Bing AI citations and grounding phrases, especially pages that are cited for the wrong intent.

## Expansion Rules

Create or improve content only when one of these is true:

- Search Console shows repeated impressions for a query not directly answered.
- A pilot user asks the same operational question more than once.
- A page ranks but has weak CTR, suggesting title/description improvement.
- A topic cluster has no practical template or no FAQ support.

## Priority Watchlist

Track these query families first:

- برنامج إدارة مكتب عقاري
- إدارة مكتب عقاري
- تحصيل الإيجارات
- متأخرات الإيجار
- عقد إيجار PDF
- جدول الاستحقاقات
- تقرير المالك
- بديل الإكسل للمكاتب العقارية
- ملف إكسل لإدارة العقارات
- شيت تحصيل الإيجارات
- جدول متابعة الإيجارات
- rent roll بالعربي
- نقل بيانات العقارات من Excel
- دفتر المكتب العقاري
- أرشفة مستندات عقارية

## Decision Log

Use this rule for future content:

- If a topic is educational: add it under guides or glossary.
- If a topic is implementation-oriented: add it as a template.
- If a topic is purchase-intent: add it under solutions.
- If a topic connects multiple areas: promote it into a pillar guide.
