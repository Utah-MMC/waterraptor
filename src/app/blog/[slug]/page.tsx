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
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/blog';

export const dynamic = 'force-static';

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
                <span className="text-slate-500">By:</span> {author?.name ?? 'Water Raptor'}
              </span>
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-slate-900/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300"
                  >
                    {tag}
                  </span>
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

