import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Stormwater Pond Design | Water Raptor",
  description:
    "Expert guidance on stormwater pond design and maintenance using The Water Raptor. Learn how to design ponds that stay clear of weeds and sediment with amphibious maintenance access. Engineering tips for watershed ponds, retention basins, and stormwater management systems.",
  keywords: "stormwater pond design, pond engineering, watershed ponds, amphibious maintenance, Water Raptor design tips",
  openGraph: {
    title: "Stormwater Pond Design | Water Raptor",
    description:
      "Expert guidance on stormwater pond design and maintenance using The Water Raptor. Learn how to design ponds that stay clear of weeds and sediment.",
    url: "https://waterraptor.com/resources/stormwater-pond-design",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/image004.jpg",
        width: 1200,
        height: 630,
        alt: "Stormwater pond design and maintenance guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stormwater Pond Design | Water Raptor",
    description: "Expert guidance on stormwater pond design and maintenance.",
  },
};

export default function StormwaterPondDesignPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-6 text-center">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl text-white">Stormwater Pond Design & Preparation</h1>
        <p className="text-slate-200 max-w-3xl mx-auto">
          Designing stormwater ponds means planning for harvesting, dredging, and maintenance that The Water Raptor can execute.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/lake-services">View services</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Read insights</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Design for harvestable geometry</h2>
            <p className="text-slate-200">
              Gentle side slopes, stable benches, and proper overflow locations ensure The Water Raptor
              can reach every inch of the pond. Plan sediment basins that are easy to dredge and stage haul-outs.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>Include service pads and access routes for amphibious equipment.</li>
              <li>Design flat benches that allow cutter heads and dredge arms to extend safely.</li>
              <li>Direct inflows away from staging areas so we can keep turbidity low.</li>
            </ul>
          </div>
          <div className="relative h-96 overflow-hidden rounded-3xl border border-white/20">
            <Image
              src="/images/image001.png"
              alt="Stormwater pond planning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-white">Stormwater readiness</h3>
            <p className="text-sm text-slate-200">
              We plan maintenance windows so the pond is clean before high-flow seasons.
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-white">Amphibious access</h3>
            <p className="text-sm text-slate-200">
              The Water Raptor glides from shore to water with no cranes, keeping crews on schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={114}
          count={6}
          title="Stormwater readiness gallery"
          description="Images showing how we prep stormwater basins for long-term clarity."
          ctaLabel="Explore pond planning guides"
          ctaHref="/resources/annual-pond-management-programs"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold text-white">Start designing for easy amphibious work</h2>
          <p className="text-slate-200">
            Tell us about your basin, stormwater load, and maintenance goals so we can build the deployment that keeps the pond functional.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
