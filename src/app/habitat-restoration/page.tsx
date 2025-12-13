import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Leaf, Hand, Waves } from "lucide-react";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Habitat Restoration & Wetland Planting | Water Raptor",
  description:
    "Professional habitat restoration and wetland planting services using the amphibious Water Raptor tool carrier. Native planting, habitat installation, shoreline restoration, and invasive species control for healthy aquatic ecosystems. Low-impact staging for wetland buffers and aquatic fringes.",
  keywords: "wetland restoration, habitat planting, shoreline restoration, amphibious habitat work, Water Raptor wetlands",
  openGraph: {
    title: "Habitat Restoration & Wetland Planting | Water Raptor",
    description:
      "Professional habitat restoration and wetland planting services using the amphibious Water Raptor. Native planting, habitat installation, and shoreline restoration.",
    url: "https://waterraptor.com/habitat-restoration",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/image004.jpg",
        width: 1200,
        height: 630,
        alt: "Habitat restoration and wetland planting services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habitat Restoration & Wetland Planting | Water Raptor",
    description: "Professional habitat restoration and wetland planting services.",
  },
};

const SERVICES = [
  {
    icon: <Leaf className="h-6 w-6 text-emerald-500" />,
    title: "Native planting",
    detail: "Replant shoreline buffers, wetlands, and aquatic fringes using low-impact staging from The Water Raptor.",
  },
  {
    icon: <Hand className="h-6 w-6 text-lime-400" />,
    title: "Habitat structures",
    detail: "Deploy brush bundles, coir logs, and rock structures while our amphibious machine holds equipment in place.",
  },
  {
    icon: <Waves className="h-6 w-6 text-blue-500" />,
    title: "Shoreline restoration",
    detail: "Trim banks, install rip-rap, and smooth access ramps with precise hydraulic tools.",
  },
  {
    icon: <Check className="h-6 w-6 text-sky-500" />,
    title: "Invasive intercept",
    detail: "Cut and collect invasive reeds before planting natives, ensuring restored habitat stays resilient.",
  },
];

export default function HabitatRestorationPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-4">
          <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">Habitat</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            Habitat Restoration, Wetland Planting, and Shoreline Work
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl">
            The Water Raptor carries planting crews, structures, and equipment across wetlands, lakeshores, and canal edges so we can rebuild habitats while removing invasive competitors.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <Card key={service.title} className="relative overflow-hidden bg-white/5 border-white/10">
              {/* Claw trademark watermark */}
              <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
                <img
                  src="/images/graphics/clawssss.svg"
                  alt="Water Raptor trademark"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <CardHeader className="relative z-10 flex items-center gap-3">
                <div className="rounded-full bg-white/10 p-2">{service.icon}</div>
                <img
                  src="/images/graphics/clawssss.svg"
                  alt="Water Raptor claw"
                  className="w-6 h-6 opacity-80"
                  style={{ filter: 'invert(1)' }}
                />
                <CardTitle className="text-lg font-semibold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-sm text-slate-300">{service.detail}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-950/70">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <MediaShowcase
            offset={54}
            count={6}
            title="Habitat restoration gallery"
            description="Wetland, shoreline, and habitat installations executed with The Water Raptor."
            ctaLabel="Explore habitat guides"
            ctaHref="/blog"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Restore and protect your shoreline</h2>
          <p className="text-slate-300">
            Amphibious staging keeps crews safe and equipment mobile while we plant wetland species, rebuild banks, and leave behind a stable ecosystem.
          </p>
          <div className="flex justify-center gap-3">
            <Button asChild className="bg-emerald-500 text-slate-900">
              <Link href="/lake-services">Discover related services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact-form">Schedule habitat work</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact-form" className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Book habitat work</p>
          <h2 className="text-3xl font-bold">Plan Wetland & Shoreline Restoration</h2>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
