import Link from "next/link";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MediaShowcase } from "@/components/MediaShowcase";
import BriefCTA from "@/components/BriefCTA";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

const RESOURCE_INDEX = [
  {
    title: "Optimal low-phosphorus fish food",
    summary:
      "Control internal nutrient loading fast by pairing better feed with The Water Raptor's biomass collection.",
    href: "/resources/optimal-low-phosphorus-fish-food",
  },
  {
    title: "Toxic algae detection & response",
    summary:
      "Understand HAB triggers and how our amphibious staging keeps crews safe while the machine clears the blooms.",
    href: "/resources/toxic-algae-guide",
  },
  {
    title: "Stormwater pond design & prep",
    summary:
      "Design stormwater ponds for clarity, then keep them functional with amphibious harvesting and dredge prep.",
    href: "/resources/stormwater-pond-design",
  },
  {
    title: "Sonic algae-control overview",
    summary:
      "Integrate ultrasonic systems with Water Raptor staging so the harshest algae pools get treated and flushed.",
    href: "/resources/sonic-algae-control",
  },
  {
    title: "Mechanical solutions 101",
    summary:
      "We break down cutter heads, conveyors, dredge pumps, and amphibious tactics for maximum biomass removal.",
    href: "/resources/mechanical-solutions-101",
  },
  {
    title: "Annual pond management programs",
    summary:
      "Plan a seasonal cycle of harvesting, testing, and dredging that keeps your water body ready for recreation.",
    href: "/resources/annual-pond-management-programs",
  },
  {
    title: "Aeration & oxygen programs",
    summary:
      "Pair aeration design with amphibious maintenance so the lake stays oxygen-rich year round.",
    href: "/resources/aeration-programs",
  },
  {
    title: "Sediment removal planning",
    summary:
      "Target muck, sediment, and nutrient-rich layers with The Water Raptor’s dredge pumps and conveyors.",
    href: "/resources/sediment-removal-plans",
  },
  {
    title: "Shoreline restoration techniques",
    summary:
      "Use amphibious staging to rebuild banks, vegetative buffers, and erosion-prone areas.",
    href: "/resources/shoreline-restoration",
  },
  {
    title: "Water quality testing & response",
    summary:
      "Pair field testing with Water Raptor deployments so clarity goals and treatment plans align.",
    href: "/resources/water-quality-testing",
  },
  {
    title: "Invasive species interception",
    summary:
      "Target carp, milfoil, and aggressive reeds with amphibious cutters, conveyors, and follow-up tracking.",
    href: "/resources/invasive-species-response",
  },
];

export const metadata: Metadata = {
  title: "Pond & Lake Management Resources | Water Raptor",
  description:
    "Comprehensive strategy guides and resource pages about pond and lake management, including harvesting, nutrient control, water quality management, and amphibious operations powered by The Water Raptor. Expert insights and practical guides for healthy aquatic ecosystems.",
  keywords: "pond and lake management resources, pond management guides, lake management guides, aquatic ecosystem management, pond maintenance resources, lake maintenance guides, Water Raptor resources, aquatic management insights",
  openGraph: {
    title: "Pond & Lake Management Resources | Water Raptor",
    description:
      "Comprehensive strategy guides and resource pages about pond and lake management, including harvesting, nutrient control, and water quality management.",
    url: "https://waterraptor.com/resources",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/image004.jpg",
        width: 1200,
        height: 630,
        alt: "Pond and lake management resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pond & Lake Management Resources | Water Raptor",
    description: "Comprehensive strategy guides and resource pages about pond and lake management.",
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-6 text-center">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Water Raptor Resources
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl text-white">Guides built around The Water Raptor</h1>
        <p className="text-slate-200 max-w-3xl mx-auto">
          Strategic resource pages that explain how we harvest aquatic weeds, lower nutrients, and
          keep stormwater or recreational ponds healthy by pairing insight with on-water performance.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/lake-services">View Services</Link>
          </Button>
          <Button variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white" asChild>
            <Link href="/blog">See insights</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-white">Featured resource topics</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {RESOURCE_INDEX.map((resource) => (
            <Card key={resource.title} className="relative overflow-hidden bg-slate-900/90 backdrop-blur-sm border-white/20 transition hover:border-emerald-400 hover:bg-slate-900/95 shadow-lg">
              {/* Claw trademark watermark */}
              <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
                <img
                  src="/images/graphics/clawssss.svg"
                  alt="Water Raptor trademark"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <CardHeader className="relative z-10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/graphics/clawssss.svg"
                    alt="Water Raptor claw"
                    className="w-6 h-6 opacity-80"
                    style={{ filter: 'invert(1)' }}
                  />
                  <CardTitle className="text-lg font-semibold text-white">{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 text-sm text-slate-200 space-y-4">
                <p>{resource.summary}</p>
                <Button variant="ghost" className="text-emerald-300 hover:text-emerald-200 hover:bg-emerald-950/30" asChild>
                  <Link href={resource.href}>Open guide</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <BriefCTA />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={96}
          count={6}
          title="Business-critical deployments"
          description="Images from Water Raptor deployments that inspired these resource guides."
          ctaLabel="Explore the blog"
          ctaHref="/blog"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold text-white">Need a hand with these guides?</h2>
          <p className="text-slate-200">
            Tell us about the pond, lake, or canal you manage and we will tailor a plan that uses
            The Water Raptor for harvesting, dredging, and nutrient work.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
