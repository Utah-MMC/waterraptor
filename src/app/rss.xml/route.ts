import { getBlogIndexPosts } from '@/lib/blog';

const SITE_URL = 'https://waterraptor.com';

export const runtime = 'nodejs';

type RssItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author?: string;
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = getBlogIndexPosts().slice(0, 25);
  const lastBuildDate = new Date().toUTCString();

  const items: RssItem[] = posts.map((post) => ({
    title: post.title,
    link: `${SITE_URL}/blog/${post.slug}`,
    description: post.summary,
    pubDate: new Date(`${post.publishedAt}T00:00:00Z`).toUTCString(),
    author: post.authorName,
  }));

  const itemsXml = items
    .map((item) => {
      const guid = item.link;
      return [
        '<item>',
        `<title>${escapeXml(item.title)}</title>`,
        `<link>${escapeXml(item.link)}</link>`,
        `<guid isPermaLink="true">${escapeXml(guid)}</guid>`,
        `<description>${escapeXml(item.description)}</description>`,
        item.author ? `<author>${escapeXml(item.author)}</author>` : '',
        `<pubDate>${escapeXml(item.pubDate)}</pubDate>`,
        '</item>',
      ].join('');
    })
    .join('');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '<channel>',
    `<title>${escapeXml('Water Raptor — Pond & Lake Management')}</title>`,
    `<link>${escapeXml(SITE_URL)}</link>`,
    `<description>${escapeXml(
      'Long-form guides and field case studies on pond and lake management: harvesting, dredging, weed control, and water-quality care.'
    )}</description>`,
    `<language>${escapeXml('en-us')}</language>`,
    `<lastBuildDate>${escapeXml(lastBuildDate)}</lastBuildDate>`,
    itemsXml,
    '</channel>',
    '</rss>',
  ].join('');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
