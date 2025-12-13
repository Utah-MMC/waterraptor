import Link from 'next/link';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MediaShowcase } from '@/components/MediaShowcase';
import BlogIndexClient from '@/components/blog/BlogIndexClient';
import { AUTHORS } from '@/lib/authors';
import { getBlogIndexPosts } from '@/lib/blog';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Pond & Lake Management Blog | WaterRaptor.com',
  description:
    'Long-form guides and field case studies on pond and lake management: harvesting, dredging, weed control, and water-quality maintenance with The Water Raptor.',
  keywords:
    'pond and lake management blog, aquatic weed control guides, dredging case studies, harvesting tips, water quality maintenance, amphibious equipment operations',
  openGraph: {
    title: 'Pond & Lake Management Blog | WaterRaptor.com',
    description:
      'Long-form guides and field case studies on pond and lake management with The Water Raptor.',
    url: 'https://waterraptor.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://waterraptor.com/images/image004.jpg',
        width: 1200,
        height: 630,
        alt: 'Pond and lake management guides and case studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pond & Lake Management Blog | WaterRaptor.com',
    description: 'Long-form guides and field case studies about pond and lake management.',
  },
};

export default function BlogPage() {
  const posts = getBlogIndexPosts();

  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Water Raptor Blog
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Guides & field case studies</h1>
        <p className="text-lg text-slate-200 max-w-3xl">
          Learn how The Water Raptor harvests aquatic weeds, stages herbicide work, and restores depth across lakes,
          ponds, rivers, and canals. We publish technical playbooks and real-world narratives so you can plan
          confident projects with amphibious machinery.
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
            <Link href="/resources">Browse resources</Link>
          </Button>
        </div>

        <BlogIndexClient posts={posts} />

        <section className="mt-16 space-y-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Authors</p>
            <h2 className="text-3xl font-bold text-white">Meet the team behind the resources</h2>
            <p className="text-slate-200 max-w-3xl mx-auto">
              Field operators and planners publish what works in real ponds and lakes so you can copy proven playbooks.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {AUTHORS.map((author) => (
              <div
                key={author.id}
                className="rounded-3xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 border border-emerald-400/30">
                    <span className="text-sm font-semibold text-emerald-200">{author.initials}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-white">{author.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{author.role}</p>
                    <p className="text-sm text-slate-200">{author.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <MediaShowcase
          offset={36}
          count={6}
          title="Field story gallery"
          description="Journal-style photos that capture herbicide staging, harvesting piles, dredging passes, and river work completed with The Water Raptor."
        />
      </section>
    </div>
  );
}

