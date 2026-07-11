import { articleUrl, publicResourceArticles } from '../content/resources';
import { resourceTopics, topicUrl } from '../content/resource-topics';
import { publicResourceTemplates, templateUrl } from '../content/resource-templates';
import { solutionPages, solutionUrl } from '../content/resource-solutions';

const siteOrigin = 'https://qaydalaqar.com';

export function GET() {
  const lines = [
    '# قيد العقار',
    '',
    '> مساحة عمل عربية للمكاتب العقارية في السعودية: رادار يومي، عقود إيجار، تحصيل، دفتر مكتب، تقارير، خطابات رسمية، ملف \u2068PDF\u2069 مصدر للعقد المستورد، وذاكرة تشغيلية.',
    '',
    '## Public Pages',
    `- Home: ${siteOrigin}/`,
    `- Knowledge hub: ${siteOrigin}/resources/`,
    `- Operational glossary: ${siteOrigin}/resources/terms/`,
    `- Practical templates: ${siteOrigin}/resources/templates/`,
    `- Solution pages: ${siteOrigin}/resources/solutions/`,
    `- Blog: ${siteOrigin}/blog/`,
    '',
    '## Topic Paths',
    ...resourceTopics.map((topic) => `- ${topic.title}: ${siteOrigin}${topicUrl(topic)}`),
    '',
    '## Guides',
    ...publicResourceArticles.map((article) => `- ${article.title}: ${siteOrigin}${articleUrl(article)}`),
    '',
    '## Practical Templates',
    ...publicResourceTemplates.map((template) => `- ${template.title}: ${siteOrigin}${templateUrl(template)}`),
    '',
    '## Commercial Search Pages',
    ...solutionPages.map((page) => `- ${page.title}: ${siteOrigin}${solutionUrl(page)}`),
    '',
    '## Product Boundaries',
    '- Public content describes product concepts and operational practices.',
    '- The authenticated app lives on app.qaydalaqar.com and is not a public knowledge source.',
    '- Ejar PDF import means user-reviewed file import, not an automatic platform integration.',
    '- The current product does not provide automatic Excel import or a standalone commission-management module.',
    '- Document support currently means generated letters and the source PDF retained with an imported lease, not a general document archive.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
