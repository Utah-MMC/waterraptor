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

const PAGE_URL = "https://waterraptor.com/resources/shoreline-restoration";

const toc = [
  { id: "diagnose", label: "Diagnose the problem" },
  { id: "strategies", label: "Restoration strategies" },
  { id: "staging", label: "Amphibious staging" },
  { id: "sequencing", label: "Sequencing" },
  { id: "maintenance", label: "Maintenance plan" },
  { id: "faq", label: "FAQs" },
];

const faqs = [
  {
    question: "Is riprap always the best answer?",
    answer:
      "Not always. Riprap is great for high-energy shorelines and toe protection, but many banks do better with a combined approach: toe protection where needed and buffers above for filtration and stability.",
  },
  {
    question: "Will shoreline work help with water quality?",
    answer:
      "Yes, when it reduces erosion and runoff. Buffers and stabilized edges help keep sediments and nutrients out of the lake.",
  },
];

export const metadata: Metadata = {
  title: "Shoreline Restoration | Water Raptor",
  description:
    "A practical guide to shoreline restoration: diagnose erosion, choose the right stabilization strategy, and use amphibious staging to install buffers, riprap, and erosion controls without barges.",
  keywords:
    "shoreline restoration, erosion control, riprap installation, vegetative buffers, bank stabilization, lake shoreline, pond shoreline repair",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Shoreline Restoration | Water Raptor",
    description:
      "Diagnose erosion, choose a stabilization strategy, and execute shoreline restoration with amphibious staging.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: "https://waterraptor.com/images/image004.jpg",
        width: 1200,
        height: 630,
        alt: "Shoreline restoration services for lakes and ponds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoreline Restoration | Water Raptor",
    description: "A practical guide to shoreline restoration and erosion control.",
  },
};

function getJsonLd() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Shoreline Restoration",
    description: metadata.description,
    url: PAGE_URL,
    image: ["https://waterraptor.com/images/image004.jpg"],
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

export default function ShorelineRestorationPage() {
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
              <span className="text-xs uppercase tracking-[0.35em] text-slate-300">Erosion control</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold md:text-5xl text-white">Shoreline restoration</h1>
              <p className="text-lg text-slate-200 max-w-3xl">
                Shorelines fail for reasons: concentrated wave energy, poor slope, unstable soils, and vegetation that
                can’t hold. This guide shows how to diagnose the cause, choose a strategy, and execute work cleanly
                using amphibious staging.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-emerald-500 text-slate-950">
                <Link href="/habitat-restoration">Explore habitat restoration</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                asChild
              >
                <Link href="/resources/sediment-removal-plans">Pair with sediment planning</Link>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900/60">
            <Image
              src="/images/image004.jpg"
              alt="Shoreline work in progress"
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
        <article className="space-y-12">
          <section id="diagnose" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">Diagnose the problem</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                Shoreline work fails when it treats the symptom (sloughing banks) without addressing the driver (wave,
                flow concentration, or unstable soil). Diagnosis doesn’t need to be complicated — it needs to be honest.
              </p>
              <Card className="bg-slate-900/60 border-white/15">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Common drivers of erosion</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-200 space-y-2">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Wave energy focused on a corner or narrow shoreline reach.</li>
                    <li>Steep slopes with no toe protection.</li>
                    <li>Flowing water during releases or storm inflows.</li>
                    <li>Traffic breaking vegetation mats and soft soils.</li>
                    <li>Invasive stands that create voids and undercut edges.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="strategies" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">Restoration strategies</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-slate-900/60 border-white/15">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Vegetated buffers</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-200 space-y-2">
                    <p>Best for moderate energy shorelines that need filtration and root structure.</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Native grasses and shrubs stabilize the surface.</li>
                      <li>Buffers reduce nutrient inputs from runoff.</li>
                      <li>Requires maintenance until established.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/60 border-white/15">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Riprap & toe protection</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-200 space-y-2">
                    <p>Best for high-energy corners and undercut edges.</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Stops undercutting when installed correctly.</li>
                      <li>Works well with geotextile and graded transitions.</li>
                      <li>Pairs well with plantings above.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/60 border-white/15">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Bioengineering</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-200 space-y-2">
                    <p>Best for sensitive shorelines where roots and flexible edges matter.</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Coir logs reduce wave impact while plants establish.</li>
                      <li>Live staking and mats create long-term structure.</li>
                      <li>Needs correct sequencing and early protection.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/60 border-white/15">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Access fixes</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-200 space-y-2">
                    <p>Best when failure is caused by repeated disturbance.</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Move entry/exit points away from soft banks.</li>
                      <li>Install controlled access zones.</li>
                      <li>Pair with a seasonal maintenance cadence.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="staging" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">Amphibious staging</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                Shoreline restoration is often limited by access. Barges are expensive and shoreline equipment can tear
                up banks. Amphibious staging lets crews place materials and clear invasives with less disruption.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Transport rock, logs, and plant materials along the shoreline without cranes.</li>
                <li>Cut invasive stands before restoration work starts.</li>
                <li>Stage work zones so installation stays clean and safe.</li>
              </ul>
            </div>
          </section>

          <section id="sequencing" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">Sequencing</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <ol className="list-decimal pl-5 space-y-3">
                <li>Clear invasives and debris so the shoreline edge is visible.</li>
                <li>Set the toe protection (where most failures start).</li>
                <li>Place transitions so materials stay where you want them.</li>
                <li>Finish with buffers and stabilization above the waterline.</li>
              </ol>
              <p>
                If the site is also losing depth, align shoreline work with{" "}
                <Link
                  href="/resources/sediment-removal-plans"
                  className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                >
                  sediment planning
                </Link>{" "}
                so you don’t rebuild the edge and then disturb it later.
              </p>
            </div>
          </section>

          <section id="maintenance" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">Maintenance plan</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                The first season is the most fragile. Establishment takes time, and wave events happen on their own
                schedule. A simple maintenance plan keeps the shoreline from slipping backward.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Inspect after major storms and repair small failures early.</li>
                <li>Control invasive regrowth that undermines new edges.</li>
                <li>Keep access controlled so traffic doesn’t reopen weak spots.</li>
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
          offset={150}
          count={6}
          title="Shoreline restoration gallery"
          description="Water Raptor crews rebuilding shorelines with riprap, planting, and erosion control."
          ctaLabel="Explore habitat restoration"
          ctaHref="/habitat-restoration"
        />
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-sm">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold text-white">Want a shoreline plan scoped?</h2>
            <p className="text-slate-200">
              Send photos, the shoreline segment length, and any constraints (wave exposure, access, utilities). We’ll
              recommend the right strategy and stage the work to keep the bank clean.
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
