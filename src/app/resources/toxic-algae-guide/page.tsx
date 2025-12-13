import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Toxic Algae Guide | Water Raptor",
  description:
    "Comprehensive guide to identifying and managing toxic algae blooms in ponds and lakes. Learn how to spot harmful algal blooms (HABs), understand health risks, and stage The Water Raptor for safe clearing and follow-up treatments. Prevention strategies and response protocols.",
  keywords: "toxic algae guide, harmful algal bloom, HAB prevention, Water Raptor algae response, amphibious algae removal",
  openGraph: {
    title: "Toxic Algae Guide | Water Raptor",
    description:
      "Comprehensive guide to identifying and managing toxic algae blooms in ponds and lakes. Learn prevention strategies and response protocols.",
    url: "https://waterraptor.com/resources/toxic-algae-guide",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toxic Algae Guide | Water Raptor",
    description: "Comprehensive guide to identifying and managing toxic algae blooms.",
  },
};

export default function ToxicAlgaeGuidePage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-6 text-center">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl text-white">Toxic Algae Detection & Response</h1>
        <p className="text-slate-200 max-w-3xl mx-auto">
          Recognize the early warning signs and let The Water Raptor stage crews and conveyors to
          keep toxic blooms from spreading.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/lake-services">See services</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Read insights</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Spotting HABs before they bloom</h2>
            <p className="text-slate-200">
              Look for scum, bright green islands, or discoloration along the shoreline. Our crews
              sample water and deploy The Water Raptor for immediate biomass removal so toxins stay
              localized.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>Document cell counts and photos for regulatory reporting.</li>
              <li>Use the amphibious hull to stage herbicide or sonic treatments safely.</li>
              <li>Follow up by harvesting affected mats before toxins sink into the sediment.</li>
            </ul>
          </div>
          <div className="relative h-96 overflow-hidden rounded-3xl border border-white/20">
            <Image
              src="/images/pondCleanings-768x614.webp"
              alt="Toxic algae response"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-white">Document the bloom</h3>
            <p className="text-sm text-slate-200">
              Keep water samples, photos, and GPS tags so we can calibrate follow-up treatments.
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-white">Stage The Water Raptor</h3>
            <p className="text-sm text-slate-200">
              Our conveyor-based tool carrier removes mats and positions crews for herbicide or
              sonic passes without disturbing swimmers or anglers.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={108}
          count={6}
          title="HAB response gallery"
          description="Visual proof of how we isolate toxic algae, recover biomass, and reopen recreation."
          ctaLabel="Learn more about algae control"
          ctaHref="/algae-weed-control"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold text-white">Ready for a safer bloom response?</h2>
          <p className="text-slate-200">
            Share the lake or pond name, the bloom type, and we will route the job to our amphibious
            crew for sampling, harvest, and treatment.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
