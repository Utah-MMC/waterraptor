import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BlogIndexClient from '@/components/blog/BlogIndexClient';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getBlogIndexPosts } from '@/lib/blog';

export const dynamic = 'force-static';

function getAllTags() {
  const posts = getBlogIndexPosts();
  const unique = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => unique.add(tag));
  });
  return Array.from(unique).sort((a, b) => a.localeCompare(b));
}

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export function generateMetadata({ params }: { params: { tag: string } }): Metadata {
  const tag = decodeURIComponent(params.tag);
  const url = `https://waterraptor.com/blog/tag/${encodeURIComponent(tag)}`;

  return {
    title: `Tag: ${tag} | Water Raptor Blog`,
    description: `Articles tagged "${tag}" from the Water Raptor pond & lake management blog.`,
    alternates: { canonical: url },
    openGraph: {
      title: `Tag: ${tag} | Water Raptor Blog`,
      description: `Articles tagged "${tag}" from the Water Raptor pond & lake management blog.`,
      url,
      type: 'website',
    },
  };
}

export default function BlogTagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag);
  const posts = getBlogIndexPosts().filter((post) => post.tags.includes(tag));
  if (posts.length === 0) notFound();

  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Blog Tag
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Tag: {tag}</h1>
        <p className="text-lg text-slate-200 max-w-3xl">
          Browse guides and field case studies matching this tag. Want everything? Head back to the full blog index.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/#contact-form">Book a deployment</Link>
          </Button>
          <Button
            variant="outline"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            asChild
          >
            <Link href="/blog">Back to all articles</Link>
          </Button>
        </div>

        <BlogIndexClient posts={posts} initialTags={[tag]} />
      </section>
    </div>
  );
}
