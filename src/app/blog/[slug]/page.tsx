import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import JsonLd from '@/components/JsonLd';
import { mdxComponents } from '@/components/mdx/MdxComponents';
import { getAuthorById } from '@/lib/authors';
import { getAllBlogSlugs, getBlogIndexPosts, getBlogPostBySlug } from '@/lib/blog';

export const dynamic = 'force-static';

type TocItem = {
  id: string;
  label: string;
  depth: 2 | 3;
};

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function slugifyHeading(value: string) {
  const base = value
    .trim()
    .toLowerCase()
    .replace(/`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return base || 'section';
}

function extractToc(content: string): TocItem[] {
  const lines = content.split(/\r?\n/);
  const seen = new Map<string, number>();
  const items: TocItem[] = [];
  let inFence = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(trimmed);
    if (!match) continue;

    const depth = match[1].length === 2 ? 2 : 3;
    const raw = match[2].replace(/#+\s*$/, '').trim();
    const baseId = slugifyHeading(raw);
    const nextCount = (seen.get(baseId) ?? 0) + 1;
    seen.set(baseId, nextCount);
    const id = nextCount === 1 ? baseId : `${baseId}-${nextCount}`;

    items.push({ id, label: raw, depth });
  }

  return items;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  const title = `${post.title} | Water Raptor`;
  const description = post.summary || 'Pond & lake management resources from Water Raptor.';
  const url = `https://waterraptor.com/blog/${post.slug}`;
  const imageUrl = post.heroImage ? `https://waterraptor.com${post.heroImage}` : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      publishedTime: `${post.publishedAt}T00:00:00.000Z`,
      modifiedTime: `${(post.updatedAt ?? post.publishedAt)}T00:00:00.000Z`,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

function getPostJsonLd(post: {
  title: string;
  summary: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  authorId: string;
  heroImage?: string;
}) {
  const author = getAuthorById(post.authorId);
  const imageUrl = post.heroImage ? `https://waterraptor.com${post.heroImage}` : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    image: imageUrl ? [imageUrl] : undefined,
    author: {
      '@type': 'Person',
      name: author?.name ?? 'Water Raptor',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Water Raptor',
      url: 'https://waterraptor.com',
    },
    mainEntityOfPage: `https://waterraptor.com/blog/${post.slug}`,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const author = getAuthorById(post.authorId);
  const heroImage = post.heroImage ?? '/images/image004.jpg';
  const authorId = author?.id ?? post.authorId;
  const authorUrl = `/blog/author/${encodeURIComponent(authorId)}`;
  const toc = extractToc(post.content);

  const relatedPosts = getBlogIndexPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      let score = 0;
      if (post.topic && candidate.topic === post.topic) score += 3;
      if (post.type && candidate.type === post.type) score += 1;
      const sharedTags = candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      score += sharedTags * 2;
      return { candidate, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.candidate.publishedAt.localeCompare(a.candidate.publishedAt))
    .slice(0, 4)
    .map(({ candidate }) => candidate);

  return (
    <div className="min-h-screen bg-transparent text-white">
      <JsonLd data={getPostJsonLd(post)} />

      <section className="bg-slate-900/85 backdrop-blur-sm">
        <div className="container mx-auto grid gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-950">
                {post.type ?? 'Article'}
              </Badge>
              {post.topic && (
                <span className="text-xs uppercase tracking-[0.35em] text-slate-300">
                  {post.topic}
                </span>
              )}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                {post.title}
              </h1>
              {post.summary && <p className="text-lg text-slate-200">{post.summary}</p>}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <span>
                <span className="text-slate-500">Published:</span> {formatDate(post.publishedAt)}
              </span>
              {post.updatedAt && (
                <span>
                  <span className="text-slate-500">Updated:</span> {formatDate(post.updatedAt)}
                </span>
              )}
              <span>
                <span className="text-slate-500">Read:</span> {post.readingMinutes} min
              </span>
              <span>
                <span className="text-slate-500">By:</span>{' '}
                <Link className="hover:text-white underline underline-offset-4" href={authorUrl}>
                  {author?.name ?? 'Water Raptor'}
                </Link>
              </span>
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 6).map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${encodeURIComponent(tag)}`}
                    className="rounded-full border border-white/15 bg-slate-900/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-emerald-500 text-slate-950">
                <Link href="/#contact-form">Book a deployment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="/blog">Back to all articles</Link>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900/60">
            <Image
              src={heroImage}
              alt={post.title}
              width={900}
              height={600}
              className="h-full w-full object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 px-6 py-12 lg:grid-cols-[1fr_360px]">
        <article className="max-w-none">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [
                    rehypeAutolinkHeadings,
                    {
                      behavior: 'wrap',
                      properties: { className: ['no-underline'] },
                    },
                  ],
                ],
              },
            }}
          />
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 h-fit">
          {toc.length > 0 && (
            <Card className="relative overflow-hidden bg-slate-900/90 backdrop-blur-sm border border-white/20 shadow-lg">
              <CardHeader className="relative z-10">
                <CardTitle className="text-lg font-semibold text-white">On this page</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-sm text-slate-200">
                <nav aria-label="Table of contents">
                  <ul className="space-y-2">
                    {toc.map((item) => (
                      <li key={item.id} className={item.depth === 3 ? 'ml-4' : undefined}>
                        <a
                          href={`#${item.id}`}
                          className="hover:text-white underline underline-offset-4 decoration-white/10 hover:decoration-white/40"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </CardContent>
            </Card>
          )}

          <Card className="relative overflow-hidden bg-slate-900/90 backdrop-blur-sm border border-white/20 shadow-lg">
            <CardHeader className="relative z-10">
              <CardTitle className="text-lg font-semibold text-white">About the author</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4 text-sm text-slate-200">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 border border-emerald-400/30">
                  <span className="text-sm font-semibold text-emerald-200">
                    {author?.initials ?? 'WR'}
                  </span>
                </div>
                <div className="space-y-1">
                  <Link className="block text-base font-semibold text-white hover:underline" href={authorUrl}>
                    {author?.name ?? 'Water Raptor'}
                  </Link>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {author?.role ?? 'Team'}
                  </p>
                  {author?.bio && <p>{author.bio}</p>}
                </div>
              </div>
            </CardContent>
          </Card>

          {relatedPosts.length > 0 && (
            <Card className="relative overflow-hidden bg-slate-900/90 backdrop-blur-sm border border-white/20 shadow-lg">
              <CardHeader className="relative z-10">
                <CardTitle className="text-lg font-semibold text-white">Related posts</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-3 text-sm text-slate-200">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    className="block hover:text-white"
                    href={`/blog/${related.slug}`}
                  >
                    {related.title}
                  </Link>
                ))}
              </CardContent>
            </Card>
          )}

          <Card className="relative overflow-hidden bg-slate-900/90 backdrop-blur-sm border border-white/20 shadow-lg">
            <CardHeader className="relative z-10">
              <CardTitle className="text-lg font-semibold text-white">Related links</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 space-y-3 text-sm text-slate-200">
              <Link className="block hover:text-white" href="/resources">
                Resource library
              </Link>
              <Link className="block hover:text-white" href="/lake-services">
                Lake services overview
              </Link>
              <Link className="block hover:text-white" href="/contact">
                Contact
              </Link>
            </CardContent>
          </Card>
        </aside>
      </section>
    </div>
  );
}
