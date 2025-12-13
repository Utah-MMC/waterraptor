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

const PAGE_URL = "https://waterraptor.com/resources/water-quality-testing";

const toc = [
  { id: "why-test", label: "Why testing matters" },
  { id: "what-to-measure", label: "What to measure" },
  { id: "when-to-test", label: "When to test" },
  { id: "turn-into-actions", label: "Turn results into actions" },
  { id: "playbooks", label: "Response playbooks" },
  { id: "faq", label: "FAQs" },
];

const faqs = [
  {
    question: "Do I need lab testing to get value from monitoring?",
    answer:
      "Not always. Consistent field measurements and photo documentation can show trends quickly. Lab testing becomes more valuable when you're making larger decisions like dredging scope or program design.",
  },
  {
    question: "How often should I test?",
    answer:
      "Enough to see a trend: baseline early, after major storms, and during peak heat. Tighten cadence if the lake is struggling.",
  },
];

export const metadata: Metadata = {
  title: "Water Quality Testing & Response | Water Raptor",
  description:
    "A practical guide to water quality testing for ponds and lakes: what to measure, when to sample, and how Water Raptor turns results into harvesting, dredging, and maintenance decisions.",
  keywords:
    "water quality testing, pond testing, lake water testing, dissolved oxygen, phosphorus, nitrogen, turbidity, secchi depth, water quality response plan",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Water Quality Testing & Response | Water Raptor",
    description:
      "What to measure, when to test, and how to turn results into a field plan for harvesting, dredging, and lake maintenance.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: "https://waterraptor.com/images/pondConsultation1000x800-768x614.webp",
        width: 1200,
        height: 630,
        alt: "Water quality testing for ponds and lakes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Quality Testing & Response | Water Raptor",
    description: "A practical guide to water quality testing for ponds and lakes.",
  },
};

function getJsonLd() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Water Quality Testing & Response",
    description: metadata.description,
    url: PAGE_URL,
    image: ["https://waterraptor.com/images/pondConsultation1000x800-768x614.webp"],
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

export default function WaterQualityTestingPage() {
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
                Monitoring & response
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold md:text-5xl text-white">
                Water quality testing & response
              </h1>
              <p className="text-lg text-slate-200 max-w-3xl">
                Testing shouldn’t be a report that sits on a shelf. It should tell you what to do next: harvest a mat,
                adjust a maintenance cadence, or target dredging where nutrients are stored in sediment. This guide
                explains what to measure and how we turn results into field decisions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-emerald-500 text-slate-950">
                <Link href="/lake-management">See lake management</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                asChild
              >
                <Link href="/resources/toxic-algae-guide">Toxic algae guide</Link>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900/60">
            <Image
              src="/images/pondConsultation1000x800-768x614.webp"
              alt="Water quality testing"
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
          <section id="why-test" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">Why testing matters</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                Clarity, algae, and weed growth are symptoms. Testing helps you identify the pressure behind the
                symptoms: oxygen stress, nutrient loading, and sediment-driven resuspension. That’s what lets you plan
                a response that lasts longer than a single cleanup.
              </p>
            </div>
          </section>

          <section id="what-to-measure" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">What to measure</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-slate-900/60 border-white/15">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Core field measurements</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-200 space-y-2">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Visibility / clarity (consistent photos work).</li>
                      <li>Dissolved oxygen (morning readings matter).</li>
                      <li>Temperature profile (surface vs deeper zones).</li>
                      <li>Turbidity (how easily sediment stays suspended).</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/60 border-white/15">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Lab-style indicators</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-200 space-y-2">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Phosphorus (common bloom driver).</li>
                      <li>Nitrogen (supports growth and bloom persistence).</li>
                      <li>Chlorophyll-a (algae intensity indicator).</li>
                      <li>pH / alkalinity (helps interpret response).</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="when-to-test" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">When to test</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="text-white font-semibold">Baseline</span>: early season, before peak growth.
                </li>
                <li>
                  <span className="text-white font-semibold">After storms</span>: when inflows and sediment spikes matter.
                </li>
                <li>
                  <span className="text-white font-semibold">During peak heat</span>: when oxygen stress and algae risk rise.
                </li>
              </ul>
            </div>
          </section>

          <section id="turn-into-actions" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">Turn results into actions</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <span className="text-white font-semibold">Identify the driver</span>: nutrients, oxygen, resuspension,
                  or access/vegetation.
                </li>
                <li>
                  <span className="text-white font-semibold">Pick the lowest-friction intervention</span> that moves the
                  driver.
                </li>
                <li>
                  <span className="text-white font-semibold">Schedule follow-up</span> so improvements hold.
                </li>
              </ol>
              <p>
                If sediment is the driver, pair results with{" "}
                <Link
                  href="/resources/sediment-removal-plans"
                  className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                >
                  sediment removal planning
                </Link>
                .
              </p>
            </div>
          </section>

          <section id="playbooks" className="space-y-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">Response playbooks</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <Card className="bg-slate-900/60 border-white/15">
                <CardHeader>
                  <CardTitle className="text-lg text-white">If clarity drops fast</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-200 space-y-2">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Inspect inlets and corners for fresh sediment accumulation.</li>
                    <li>Confirm whether a storm event triggered turbidity.</li>
                    <li>Scope whether targeted dredging would reduce repeat events.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/60 border-white/15">
                <CardHeader>
                  <CardTitle className="text-lg text-white">If algae risk rises</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-200 space-y-2">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Prioritize safety and monitoring; don’t improvise around unknown blooms.</li>
                    <li>
                      Use the{" "}
                      <Link
                        href="/resources/toxic-algae-guide"
                        className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                      >
                        toxic algae guide
                      </Link>{" "}
                      to plan next steps.
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
          offset={156}
          count={6}
          title="Testing-driven deployments"
          description="Photos from surveys, sampling, and amphibious follow-through where The Water Raptor responds to field data."
          ctaLabel="Book a management visit"
          ctaHref="/contact"
        />
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-sm">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold text-white">Want a testing + action plan?</h2>
            <p className="text-slate-200">
              Tell us the waterbody location, the main symptom (weeds, algae, turbidity), and what success looks like.
              We’ll help build a monitoring cadence and response playbook that fits your site.
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
