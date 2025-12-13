import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { MediaShowcase } from '@/components/MediaShowcase';

export const metadata: Metadata = {
  title: 'Pond & Lake Management Resources | WaterRaptor.com',
  description:
    'Articles, guides, and case studies about comprehensive pond and lake management, including harvesting, dredging, water quality management, and aquatic ecosystem maintenance with The Water Raptor. Expert insights and practical solutions for healthy water bodies.',
  keywords:
    'pond and lake management resources, pond management guides, lake management articles, aquatic ecosystem management, pond maintenance guides, lake maintenance resources, amphibious equipment articles, aquatic weed control, Water Raptor blog',
  openGraph: {
    title: 'Pond & Lake Management Resources | WaterRaptor.com',
    description:
      'Articles, guides, and case studies about comprehensive pond and lake management with The Water Raptor. Expert insights and practical solutions.',
    url: 'https://waterraptor.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://waterraptor.com/images/image004.jpg',
        width: 1200,
        height: 630,
        alt: 'Pond and lake management resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pond & Lake Management Resources | WaterRaptor.com',
    description: 'Articles, guides, and case studies about comprehensive pond and lake management.',
  },
};

const STORIES = [
  {
    title: 'Harvesting dense cattails with The Water Raptor',
    href: '/harvesting',
    summary:
      'Step-by-step approach for tackling cattail-dominated farm ponds with cutting, raking, and conveying.',
  },
  {
    title: 'Improvements from regular lake management',
    href: '/lake-management',
    summary:
      'How scheduled vegetation control, aeration, and monitoring keeps Utah lakes healthy year-round.',
  },
  {
    title: 'Depth restoration case study',
    href: '/lake-dredging',
    summary:
      'A desert reservoir dredge from start to finish, including muck removal and shoreline rebuilding.',
  },
  {
    title: 'Maintaining clarity through maintenance plans',
    href: '/lake-maintenance',
    summary:
      'Our maintenance programs combine herbicide staging, manual cleanup, and photo reporting.',
  },
  {
    title: 'River and canal corridors unblocked',
    href: '/river-canal-management',
    summary:
      'Water Raptor crews keep flow corridors and canals moving with debris removal, bank trimming, and dredging where needed.',
  },
];

const RESOURCE_GUIDES = [
  {
    title: 'Optimal low-phosphorus fish food',
    href: '/resources/optimal-low-phosphorus-fish-food',
    summary:
      'Reduce internal phosphorus by combining lean feeds with amphibious cleanup after every meal.',
  },
  {
    title: 'Stormwater pond design and prep',
    href: '/resources/stormwater-pond-design',
    summary:
      'Design stormwater basins with amphibious service in mind so maintenance stays fast and efficient.',
  },
  {
    title: 'Sonic algae control & deployment',
    href: '/resources/sonic-algae-control',
    summary:
      'Pair ultrasonic passes with Water Raptor staging for chemical-light algae work.',
  },
  {
    title: 'Aeration & oxygen programs',
    href: '/resources/aeration-programs',
    summary:
      'Match aeration bursts with amphibious harvesting so oxygen remains high even after feed cycles.',
  },
  {
    title: 'Shoreline restoration and buffers',
    href: '/resources/shoreline-restoration',
    summary:
      'Rebuild banks, plant buffers, and install rip-rap with amphibious staging.',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">Resources</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Guides & case studies</h1>
        <p className="text-lg text-slate-200 max-w-3xl">
          Learn how The Water Raptor harvests aquatic weeds, stages herbicide work, and restores depth across lakes,
          ponds, rivers, and canals. We publish tech tips, job narratives, and seasonal strategies so you can plan
          confident projects with amphibious machinery.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {STORIES.map((story) => (
            <Link
              key={story.title}
              href={story.href}
              className="group relative rounded-3xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-6 transition hover:border-emerald-400 hover:bg-slate-900/95 shadow-lg"
            >
              <div className="space-y-2">
                <div className="text-sm text-emerald-300 uppercase tracking-[0.3em]">Case Study</div>
                <h3 className="text-2xl font-semibold text-white">{story.title}</h3>
                <p className="text-sm text-slate-200">{story.summary}</p>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400 group-hover:text-emerald-300">
                  Read the story
                </div>
              </div>
            </Link>
          ))}
        </div>
        <section className="mt-12 space-y-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Resource Guides</p>
            <h2 className="text-3xl font-bold text-white">Technical pages powered by The Water Raptor</h2>
            <p className="text-slate-200 max-w-3xl mx-auto">
              Explore how we pair aquatic herbicide, mechanical harvesting, and sonar treatments with amphibious operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {RESOURCE_GUIDES.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="rounded-3xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-6 transition hover:border-emerald-400 hover:bg-slate-900/95 shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Guide</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{guide.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{guide.summary}</p>
                <div className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">
                  Read the guide
                </div>
              </Link>
            ))}
          </div>
        </section>
        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/lake-services">Return to our services</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <MediaShowcase
          offset={36}
          count={6}
          title="Resource gallery"
          description="Journal-style photos that capture herbicide staging, harvesting piles, and river work completed with The Water Raptor."
        />
      </section>
    </div>
  );
}
