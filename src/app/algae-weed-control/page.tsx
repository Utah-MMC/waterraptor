import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Leaf, Waves } from "lucide-react";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Algae & Aquatic Weed Control | Water Raptor",
  description:
    "Professional algae and aquatic weed control services powered by the amphibious Water Raptor. Comprehensive solutions including mechanical cutting, raking, dredging, and herbicide staging for ponds, lakes, and canals. Suppress algae blooms and remove invasive vegetation to maintain clear, healthy water bodies.",
  keywords: "algae control, aquatic weed removal, amphibious vegetation control, Water Raptor, pond algae treatment",
  openGraph: {
    title: "Algae & Aquatic Weed Control | Water Raptor",
    description:
      "Professional algae and aquatic weed control services powered by the amphibious Water Raptor. Cutting, raking, dredging, and herbicide staging.",
    url: "https://waterraptor.com/algae-weed-control",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/image004.jpg",
        width: 1200,
        height: 630,
        alt: "Algae and aquatic weed control services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Algae & Aquatic Weed Control | Water Raptor",
    description: "Professional algae and aquatic weed control services powered by the Water Raptor.",
  },
};

const FEATURES = [
  { title: "Algae suppression", icon: <Droplets className="h-6 w-6 text-cyan-600" /> },
  { title: "Invasive vegetation removal", icon: <Leaf className="h-6 w-6 text-lime-600" /> },
  { title: "Dredge-enhanced clarity", icon: <Waves className="h-6 w-6 text-blue-600" /> },
];

export default function AlgaeWeedControlPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-4">
          <Badge className="text-sm uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
            Water Raptor Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            Algae & Aquatic Weed Control with The Water Raptor
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl">
            We clear thick algae blooms, floating mats, and invasive aquatic vegetation with Truxor’s amphibious cutting, raking, and dredging attachments. Every pass removes biomass and preps the site for long-term resilience.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="bg-white/5 border-white/10 text-left">
              <CardHeader className="flex items-center gap-3">
                <div className="rounded-full bg-white/10 p-2">{feature.icon}</div>
                <CardTitle className="text-lg font-semibold text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-200">
                {feature.title === "Algae suppression"
                  ? "Targeted cutting plus raking removes algae base and floating biomass for treatment."
                  : feature.title === "Invasive vegetation removal"
                  ? "Cut, pull, and collect cattails, reeds, lily pads, and more with specialized attachments."
                  : "Dredge muck simultaneously when algae is fueled by nutrient-rich sediment."}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/70">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <MediaShowcase
            offset={42}
            count={6}
            title="Algae control gallery"
            description="Photos of algae raking, cutter heads, and biomass handling done with The Water Raptor."
            ctaLabel="Read our algae strategy"
            ctaHref="/blog"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold">Why this matters</h2>
          <p className="text-slate-200 max-w-3xl mx-auto">
            Dense algae and weed growth steal oxygen, block sunlight, and choke boat ramps. The Water Raptor reaches the hardest-to-access pockets and collects the biomass so your lake stays usable.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-emerald-500 text-slate-900">
              <Link href="/lake-services">View related services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact-form">Book a deployment</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact-form" className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Schedule Algae Controls</p>
          <h2 className="text-3xl font-bold">Let The Water Raptor Clear Your Waterbody</h2>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
