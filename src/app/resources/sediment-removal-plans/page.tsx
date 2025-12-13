import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MediaShowcase } from "@/components/MediaShowcase";
import JsonLd from "@/components/JsonLd";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

const PAGE_URL = "https://waterraptor.com/resources/sediment-removal-plans";

const toc = [
  { id: "what-is-sediment", label: "What counts as sediment" },
  { id: "when-to-remove", label: "When removal is worth it" },
  { id: "planning-steps", label: "Planning steps" },
  { id: "dewatering", label: "Dewatering & staging" },
  { id: "haul-disposal", label: "Haul routes & disposal" },
  { id: "timeline", label: "Timeline & budget drivers" },
  { id: "faq", label: "FAQs" },
];

const faqs = [
  {
    question: "Do I need a full-lake dredge to see results?",
    answer:
      "Often, no. Targeted dredging in inlets, coves, and shallow shelves can restore usable depth and reduce resuspension without touching the entire basin.",
  },
  {
    question: "What should I do before the crew arrives?",
    answer:
      "Collect depth and muck-thickness estimates at hotspots, identify staging space for wet material, and confirm where material will be hauled or stockpiled.",
  },
  {
    question: "How do I keep the lake from filling back in?",
    answer:
      "Pair sediment removal with a maintenance cadence: manage vegetation and debris early, monitor water quality, and address inlet sources that keep delivering fines.",
  },
];

export const metadata: Metadata = {
  title: "Sediment Removal Plans | Water Raptor",
  description:
    "A practical guide to planning sediment removal and lake dredging: measure muck thickness, stage dewatering, choose haul routes, and keep dredging productive from day one with The Water Raptor.",
  keywords:
    "sediment removal plan, dredging plan, muck removal, lake dredging strategy, dewatering plan, sediment hauling, depth restoration, Water Raptor dredging",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Sediment Removal Plans | Water Raptor",
    description:
      "Plan sediment removal the right way: measurements, dewatering, haul routes, and a production-ready dredge workflow.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: "https://waterraptor.com/images/image001.png",
        width: 1200,
        height: 630,
        alt: "Sediment removal planning for lakes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sediment Removal Plans | Water Raptor",
    description: "A practical guide to planning sediment removal and lake dredging.",
  },
};

function getJsonLd() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sediment Removal Plans",
    description: metadata.description,
    url: PAGE_URL,
    image: ["https://waterraptor.com/images/image001.png"],
    author: { "@type": "Organization", name: "Water Raptor" },
    publisher: { "@type": "Organization", name: "Water Raptor", url: "https://waterraptor.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return [article, faqPage];
}

export default function SedimentRemovalPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <JsonLd data={getJsonLd()} />

      <section className="bg-slate-900/85 backdrop-blur-sm">
        <div className="container mx-auto grid gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-950">
                Resource guide
              </Badge>
              <span className="text-xs uppercase tracking-[0.35em] text-slate-300">
                Dredging planning
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold md:text-5xl text-white">Sediment removal plans</h1>
              <p className="text-lg text-slate-200 max-w-3xl">
                The fastest dredge jobs aren’t the ones with the biggest pumps — they’re the ones with the cleanest
                plan. Use this guide to measure muck, stage dewatering, choose haul routes, and keep material moving so
                The Water Raptor stays productive.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-emerald-500 text-slate-950">
                <Link href="/lake-dredging">See dredging services</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                asChild
              >
                <Link href="/blog/sediment-removal-plans-that-actually-work">
                  Read the planning playbook
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900/60">
            <Image
              src="/images/image001.png"
              alt="Sediment removal work"
              width={900}
              height={600}
              className="h-full w-full object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute top-3 right-3 z-10">
              <img
                src="/images/graphics/clawssss.svg"
                alt="Water Raptor trademark"
                className="w-8 h-8 opacity-80"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7499%) hue-rotate(200deg) brightness(100%) contrast(100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 px-6 py-12 lg:grid-cols-[1fr_360px]">
        <article className="space-y-12">
          <section id="what-is-sediment" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              What counts as “sediment” (and why it matters)
            </h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                In the field, “sediment” usually means more than sand. Most ponds and lakes accumulate a soft layer of
                organic muck — decomposed vegetation, algae, windblown organics, and fine particles that settle in
                corners and coves. That layer holds nutrients, reduces depth, and creates the shallow shelves that
                accelerate weed growth.
              </p>
              <p>
                A useful plan separates the lake into zones: areas where you need depth restoration, areas where you
                need nuisance removal, and areas you can leave alone because they won’t change outcomes.
              </p>
              <Card className="bg-slate-900/60 border-white/15">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Signs muck is driving your problems</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-200 space-y-2">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Shoreline vegetation spreads farther out each season.</li>
                    <li>Water turns cloudy after wind or traffic and stays that way.</li>
                    <li>Inlets, coves, and corners fill in faster than the rest of the lake.</li>
                    <li>Algae events are frequent and recovery is slow.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="when-to-remove" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">When sediment removal is worth it</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                Sediment removal is most valuable when it changes the physics of the site: restores usable depth,
                reduces resuspension, and removes nutrient-rich layers that keep fueling blooms and weeds. It’s less
                valuable when it’s used as a one-time “reset” with no follow-up plan.
              </p>
              <p>
                If the site is also dealing with surface vegetation mats, start with{" "}
                <Link
                  href="/harvesting"
                  className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                >
                  harvesting
                </Link>{" "}
                so the dredge work area stays visible and shoreline staging stays usable.
              </p>
            </div>
          </section>

          <section id="planning-steps" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              Planning steps (the production-ready version)
            </h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <span className="text-white font-semibold">Measure depth and muck thickness</span> at hotspots — not a
                  single point.
                </li>
                <li>
                  <span className="text-white font-semibold">Define success</span>: target depth, target area, or target
                  volume removed.
                </li>
                <li>
                  <span className="text-white font-semibold">Choose work order</span> so your shore team can keep up
                  (don’t out-produce your dewatering zone).
                </li>
                <li>
                  <span className="text-white font-semibold">Map traffic flow</span>: where the machine enters, where
                  trucks load, and how traffic exits.
                </li>
                <li>
                  <span className="text-white font-semibold">Confirm disposal</span> before day one: destination,
                  acceptance requirements, and what “ready to haul” looks like.
                </li>
              </ol>
              <p>
                If you want the plan tied to water-quality outcomes, pair scope with{" "}
                <Link
                  href="/resources/water-quality-testing"
                  className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                >
                  water quality testing
                </Link>{" "}
                so removal targets the layers that actually affect nutrients and clarity.
              </p>
            </div>
          </section>

          <section id="dewatering" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">Dewatering & staging</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                Dewatering is your throughput governor. If your staging area is too small or too wet, the job slows,
                handling touches increase, and the shoreline becomes a bottleneck.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-slate-900/60 border-white/15">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Good staging looks like</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-200 space-y-2">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Firm access that stays usable after rain.</li>
                      <li>Space for wet material to drain without blocking traffic.</li>
                      <li>Clear separation between wet work and truck loading.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/60 border-white/15">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Red flags to fix early</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-200 space-y-2">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Only one access point with no room for traffic flow.</li>
                      <li>Staging on a soft bank that turns into ruts.</li>
                      <li>“We’ll figure out disposal later.”</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="haul-disposal" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">Haul routes & disposal</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                Disposal isn’t an afterthought — it’s where many projects either stay smooth or get expensive. The more
                touches (move, restack, re-load), the more time the shoreline crew spends handling instead of keeping up
                with production.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Confirm destination and what material condition it requires.</li>
                <li>Validate turning radii, gate widths, and weight limits on your route.</li>
                <li>Keep haul traffic out of active work zones when possible.</li>
              </ul>
            </div>
          </section>

          <section id="timeline" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">Timeline & budget drivers</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                The biggest budget drivers are usually volume uncertainty, disposal distance, and staging constraints —
                not “how powerful the dredge is.” A good plan reduces uncertainty early so the work window is tight and
                predictable.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="text-white font-semibold">Volume</span>: thickness measurements drive reality.</li>
                <li><span className="text-white font-semibold">Staging</span>: more space means fewer touches.</li>
                <li><span className="text-white font-semibold">Hauling</span>: distance and constraints stack fast.</li>
                <li><span className="text-white font-semibold">Weather</span>: rain changes banks and schedules.</li>
              </ul>
            </div>
          </section>

          <section id="faq" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">FAQs</h2>
            <Accordion type="single" collapsible className="rounded-2xl border border-white/15 bg-slate-900/60 px-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-left text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-200">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 h-fit">
          <Card className="relative overflow-hidden bg-slate-900/90 backdrop-blur-sm border border-white/20 shadow-lg">
            <CardHeader className="relative z-10">
              <CardTitle className="text-lg font-semibold text-white">On this page</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 space-y-2 text-sm">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </CardContent>
          </Card>
        </aside>
      </section>

      <section className="container mx-auto px-6 py-16">
        <MediaShowcase
          offset={144}
          count={6}
          title="Muck-removal gallery"
          description="Snapshots of dredging, conveyors, and sediment relocation driven by Water Raptor deployments."
          ctaLabel="See dredging services"
          ctaHref="/lake-dredging"
        />
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-sm">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold text-white">Want a dredge plan for your site?</h2>
            <p className="text-slate-200">
              Send a location pin, shoreline access notes, and any depth or muck measurements you have. We’ll route the
              Water Raptor crew with a plan built for production.
            </p>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
