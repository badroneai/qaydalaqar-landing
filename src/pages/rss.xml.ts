import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'مدونة قيد العقار',
    description: 'نصائح وأدلة لأصحاب المكاتب العقارية في السعودية والخليج',
    site: context.site,
    items: posts
      .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: new Date(post.data.pubDate),
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
    customData: `<language>ar</language>`,
  });
}
