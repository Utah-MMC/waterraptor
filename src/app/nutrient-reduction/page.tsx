import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Droplets, Leaf, Waves } from "lucide-react";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Nutrient Reduction & Pond Chemistry | Water Raptor",
  description:
    "Comprehensive nutrient reduction services built around The Water Raptor's dredging and biomass removal capabilities. Improve water clarity and limit algae blooms by removing phosphorus-loaded sediment and excess nutrients. Professional pond chemistry management for healthy aquatic ecosystems.",
  keywords: "nutrient reduction, phosphorus removal, algae prevention, pond chemistry, Water Raptor nutrient service",
  openGraph: {
    title: "Nutrient Reduction & Pond Chemistry | Water Raptor",
    description:
      "Comprehensive nutrient reduction services using The Water Raptor's dredging and biomass removal to improve clarity and limit algae blooms.",
    url: "https://waterraptor.com/nutrient-reduction",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/image004.jpg",
        width: 1200,
        height: 630,
        alt: "Nutrient reduction and pond chemistry management services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrient Reduction & Pond Chemistry | Water Raptor",
    description: "Comprehensive nutrient reduction services for healthy ponds and lakes.",
  },
};

const BENEFITS = [
  "Muck mining removes nutrient-loaded sediment that fuels algae.",
  "Harvesting aquatic weeds reduces internal phosphorus sources.",
  "Herbicide staging plus conveyor collection keeps treatments efficient.",
];

export default function NutrientReductionPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-6">
        <Badge className="uppercase tracking-[0.4em] text-sm bg-emerald-500 text-slate-900">
          Nutrient Reduction
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          Nutrient Reduction & Clear-Water Strategies with The Water Raptor
        </h1>
        <p className="text-lg text-slate-300">
          We remove the nutrient base for algae and weed blooms by combining cutter, dredge, and conveyor attachments on the amphibious Water Raptor, so your lake regains clarity and aquatic balance fast.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <Card key={benefit} className="relative overflow-hidden bg-white/5 border-white/10">
              {/* Claw trademark watermark */}
              <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
                <img
                  src="/images/graphics/clawssss.svg"
                  alt="Water Raptor trademark"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/graphics/clawssss.svg"
                    alt="Water Raptor claw"
                    className="w-6 h-6 opacity-80"
                    style={{ filter: 'invert(1)' }}
                  />
                  <CardTitle className="text-base font-semibold text-white">{benefit}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/70">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <MediaShowcase
            offset={48}
            count={6}
            title="Nutrient reduction gallery"
            description="Harvesting and dredging imagery where we remove decaying biomass and muck to lower phosphorus."
            ctaLabel="See nutrient planning resources"
            ctaHref="/blog"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Data-driven clarity</h2>
          <p className="text-slate-300">
            We combine mechanical removal with chemistry analysis so each nutrient reduction visit leaves the lake healthier, clearer, and ready for recreation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-emerald-500 text-slate-900">
              <Link href="/lake-services">Check related services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact-form">Request nutrient analysis</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact-form" className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Book a nutrient dive</p>
          <h2 className="text-3xl font-bold">Plan Your Phosphorus Reduction Project</h2>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
