import { articleUrl, publicResourceArticles } from '../content/resources';

const siteOrigin = 'https://qaydalaqar.com';

export function GET() {
  const lines = [
    '# قيد العقار',
    '',
    '> مساحة عمل عربية للمكاتب العقارية في السعودية: رادار يومي، عقود إيجار، تحصيل، دفتر مكتب، تقارير، مستندات وذاكرة تشغيلية.',
    '',
    '## Public Pages',
    `- Home: ${siteOrigin}/`,
    `- Knowledge hub: ${siteOrigin}/resources/`,
    `- Operational glossary: ${siteOrigin}/resources/terms/`,
    `- Blog: ${siteOrigin}/blog/`,
    '',
    '## Guides',
    ...publicResourceArticles.map((article) => `- ${article.title}: ${siteOrigin}${articleUrl(article)}`),
    '',
    '## Product Boundaries',
    '- Public content describes product concepts and operational practices.',
    '- The authenticated app lives on app.qaydalaqar.com and is not a public knowledge source.',
    '- Ejar PDF import means user-reviewed file import, not an automatic platform integration.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
