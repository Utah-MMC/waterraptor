import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Sediment Removal Plans | Water Raptor",
  description:
    "Comprehensive sediment removal planning services using The Water Raptor dredging tools, conveyors, and haul-out strategy. Build detailed plans to eliminate nutrient-rich muck, restore lake depth, and coordinate dredge operations with bathymetric data and disposal routes.",
  keywords: "sediment removal plan, dredging plan, muck removal, Water Raptor dredging, lake depth restoration",
  openGraph: {
    title: "Sediment Removal Plans | Water Raptor",
    description:
      "Comprehensive sediment removal planning services using The Water Raptor dredging tools, conveyors, and haul-out strategy.",
    url: "https://waterraptor.com/resources/sediment-removal-plans",
    type: "website",
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
    description: "Comprehensive sediment removal planning services using The Water Raptor.",
  },
};

export default function SedimentRemovalPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center space-y-6">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl text-white">Sediment Removal Plans</h1>
        <p className="text-slate-200 max-w-3xl mx-auto">
          Build a plan that uses The Water Raptor&apos;s dredge pumps, conveyors, and haul routes to eliminate nutrient-rich muck.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/lake-dredging">See dredging services</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resources/water-quality-testing">Check water testing</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Plan every muck removal pass</h2>
          <p className="text-slate-200">
            Document depth, muck thickness, and disposal routes before The Water Raptor arrives so the dredge arm and conveyor can work continuously.
          </p>
          <ul className="space-y-3 text-sm text-slate-200">
            <li>Couple bathymetric data with harvest logs to identify nutrient hotspots.</li>
            <li>Schedule sediment dewatering near the harvest deck to minimize handling.</li>
            <li>Coordinate herbicide staging so dredging clears treated layers safely.</li>
          </ul>
        </div>
        <div className="relative h-96 overflow-hidden rounded-3xl border border-white/20">
          <Image
            src="/images/image001.png"
            alt="Sediment removal"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={144}
          count={6}
          title="Muck-removal gallery"
          description="Snapshots of dredging, conveyors, and sediment relocation driven by Water Raptor deployments."
          ctaLabel="Plan your sediment project"
          ctaHref="/lake-dredging"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold text-white">Need a dredge plan?</h2>
          <p className="text-slate-200">
            Share depths, sediment types, and final use plans so we can route the Water Raptor and crew with precise lift paths and disposal staging.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
