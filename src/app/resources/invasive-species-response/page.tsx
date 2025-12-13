import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Invasive Species Response | Water Raptor",
  description:
    "Rapid response invasive species control services using The Water Raptor amphibious machine. Target invasive aquatic weeds, carp, phragmites, and aggressive reeds with mechanical harvesting, cutting, and removal. Multi-tool crew deployment for comprehensive invasive species management across ponds and lakes.",
  keywords: "invasive species response, aquatic invasive weeds, amphibious harvesting, Water Raptor invasive control",
  openGraph: {
    title: "Invasive Species Response | Water Raptor",
    description:
      "Rapid response invasive species control services using The Water Raptor amphibious machine. Target invasive aquatic weeds, carp, phragmites, and aggressive reeds with mechanical harvesting.",
    url: "https://waterraptor.com/resources/invasive-species-response",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/image004.jpg",
        width: 1200,
        height: 630,
        alt: "Invasive species response and control services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invasive Species Response | Water Raptor",
    description: "Rapid response invasive species control services using The Water Raptor.",
  },
};

export default function InvasiveSpeciesPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center space-y-6">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl text-white">Invasive Species Response</h1>
        <p className="text-slate-200 max-w-3xl mx-auto">
          Rapid amphibious response removes invasive weeds, carp, and reeds before they compromise clarity.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/lake-weed-control">See weed control services</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/algae-weed-control">Explore algae insights</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Pull, cut, and collect invasives</h2>
          <p className="text-slate-200">
            The Water Raptor reaches cattails, phragmites, milfoil, and carp-infested shallows with conveyors, cutters, and grapples sized for precision.
          </p>
          <ul className="space-y-3 text-sm text-slate-200">
            <li>Map invasive population zones in advance so we bring the right tools.</li>
            <li>Combine mechanical harvest with herbicide or poultry to prevent regrowth.</li>
            <li>Document biomass removed for compliance and reporting.</li>
          </ul>
        </div>
        <div className="relative h-96 overflow-hidden rounded-3xl border border-white/20">
          <Image
            src="/images/before-after-4.webp"
            alt="Invasive species harvesting"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={162}
          count={6}
          title="Invasive removal gallery"
          description="Real-world captures of Reed, milfoil, and carp reductions powered by The Water Raptor."
          ctaLabel="Schedule invasive work"
          ctaHref="/lake-weed-control"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold text-white">Need an invasive response?</h2>
          <p className="text-slate-200">
            Describe the weeds or carp you face and we will route the amphibious crew with harvest, dredge, and conveyor resources.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
