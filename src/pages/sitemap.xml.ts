import { getCollection } from 'astro:content';
import { articleUrl, publicResourceArticles } from '../content/resources';
import { resourceTopics, topicUrl } from '../content/resource-topics';
import { publicResourceTemplates, templateUrl } from '../content/resource-templates';
import { solutionPages, solutionUrl } from '../content/resource-solutions';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  
  const staticPages = [
    { url: 'https://qaydalaqar.com/', priority: '1.0', changefreq: 'weekly' },
    { url: 'https://qaydalaqar.com/features/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://qaydalaqar.com/pricing/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://qaydalaqar.com/about/', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://qaydalaqar.com/contact/', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://qaydalaqar.com/resources/', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://qaydalaqar.com/resources/terms/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://qaydalaqar.com/resources/templates/', priority: '0.85', changefreq: 'monthly' },
    { url: 'https://qaydalaqar.com/resources/solutions/', priority: '0.85', changefreq: 'monthly' },
    { url: 'https://qaydalaqar.com/blog/', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://qaydalaqar.com/privacy/', priority: '0.3', changefreq: 'yearly' },
    { url: 'https://qaydalaqar.com/terms/', priority: '0.3', changefreq: 'yearly' },
  ];

  const blogPages = posts.map((post) => ({
    url: `https://qaydalaqar.com/blog/${post.slug}/`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: post.data.pubDate,
  }));

  const resourcePages = publicResourceArticles.map((article) => ({
    url: `https://qaydalaqar.com${articleUrl(article)}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: article.updatedAt,
  }));

  const topicPages = resourceTopics.map((topic) => ({
    url: `https://qaydalaqar.com${topicUrl(topic)}`,
    priority: '0.85',
    changefreq: 'monthly',
  }));

  const templatePages = publicResourceTemplates.map((template) => ({
    url: `https://qaydalaqar.com${templateUrl(template)}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: template.updatedAt,
  }));

  const solutionSitemapPages = solutionPages.map((page) => ({
    url: `https://qaydalaqar.com${solutionUrl(page)}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: page.updatedAt,
  }));

  const allPages = [...staticPages, ...topicPages, ...templatePages, ...solutionSitemapPages, ...resourcePages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => `  <url>
    <loc>${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>${'lastmod' in page ? `\n    <lastmod>${page.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
