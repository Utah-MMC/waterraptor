import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BlogIndexClient from '@/components/blog/BlogIndexClient';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AUTHORS, getAuthorById } from '@/lib/authors';
import { getBlogIndexPosts } from '@/lib/blog';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return AUTHORS.map((author) => ({ authorId: encodeURIComponent(author.id) }));
}

export function generateMetadata({ params }: { params: { authorId: string } }): Metadata {
  const authorId = decodeURIComponent(params.authorId);
  const author = getAuthorById(authorId);
  if (!author) return {};

  const url = `https://waterraptor.com/blog/author/${encodeURIComponent(authorId)}`;
  const title = `${author.name} | Water Raptor Blog`;
  const description = `Articles and guides by ${author.name} (${author.role}).`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'profile',
    },
  };
}

export default function BlogAuthorPage({ params }: { params: { authorId: string } }) {
  const authorId = decodeURIComponent(params.authorId);
  const author = getAuthorById(authorId);
  if (!author) notFound();

  const posts = getBlogIndexPosts().filter((post) => post.authorId === author.id);
  if (posts.length === 0) notFound();

  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 space-y-10">
        <div>
          <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
            Author
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">{author.name}</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">{author.role}</p>
          <p className="mt-4 text-lg text-slate-200 max-w-3xl">{author.bio}</p>

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
        </div>

        <BlogIndexClient posts={posts} />
      </section>
    </div>
  );
}
