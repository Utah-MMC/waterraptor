import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MediaShowcase } from "@/components/MediaShowcase";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { serviceImages } from "@/data/serviceImages";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

type HeroImage = {
  src: string;
  alt: string;
  label: string;
};

type Highlight = {
  title: string;
  detail: string;
};

type ServicePageLayoutProps = {
  badge: string;
  title: string;
  summary: string;
  heroImages: HeroImage[];
  highlights: Highlight[];
  galleryKey: string;
  galleryTitle: string;
  galleryDescription: string;
  mediaOffset: number;
  resourceLabel: string;
  resourceHref: string;
  contactNote: string;
  ctaLabel: string;
  ctaHref: string;
};

export function ServicePageLayout({
  badge,
  title,
  summary,
  heroImages,
  highlights,
  galleryKey,
  galleryTitle,
  galleryDescription,
  mediaOffset,
  contactNote,
  ctaLabel,
  ctaHref,
  resourceLabel,
  resourceHref,
}: ServicePageLayoutProps) {
  const galleryPhotos = serviceImages[galleryKey] ?? [];

  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="bg-slate-900/70">
        <div className="container mx-auto grid gap-10 px-6 py-16 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-950">
              {badge}
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
              <p className="text-lg text-slate-300 max-w-3xl">{summary}</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {highlights.map((highlight) => (
                <Card
                  key={highlight.title}
                  className="bg-slate-950/60 border border-white/5 shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-300">{highlight.detail}</CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-emerald-500 text-slate-950">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
              <Button variant="ghost" className="border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" asChild>
                <Link href={resourceHref}>{resourceLabel}</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {heroImages.map((hero, index) => (
              <div
                key={hero.src}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40"
              >
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover"
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                  quality={index === 0 ? 90 : 80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioGrid
        title={`Portfolio highlights for ${title}`}
        description="Each frame shows The Water Raptor navigating the challenge described above."
        images={galleryPhotos}
      />

      <section className="bg-slate-900/60">
        <div className="container mx-auto px-6 py-12">
          <MediaShowcase
            offset={mediaOffset}
            count={6}
            title={galleryTitle}
            description={galleryDescription}
            ctaLabel={resourceLabel}
            ctaHref={resourceHref}
          />
        </div>
      </section>

      <section id="contact-form" className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">Schedule a deployment</p>
          <h2 className="text-3xl font-bold">Talk to The Water Raptor crew</h2>
          <p className="text-sm text-slate-300">{contactNote}</p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white" asChild>
            <Link href="/blog">Read our dispatches</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
