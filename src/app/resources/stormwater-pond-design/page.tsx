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
    "Guidance on stormwater pond design and how The Water Raptor keeps inflows clear of weeds and sediment.",
  keywords: "stormwater pond design, pond engineering, watershed ponds, amphibious maintenance, Water Raptor design tips",
};

export default function StormwaterPondDesignPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-6 text-center">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl">Stormwater Pond Design & Preparation</h1>
        <p className="text-slate-300">
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
            <h2 className="text-3xl font-semibold">Design for harvestable geometry</h2>
            <p className="text-slate-300">
              Gentle side slopes, stable benches, and proper overflow locations ensure The Water Raptor
              can reach every inch of the pond. Plan sediment basins that are easy to dredge and stage haul-outs.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>Include service pads and access routes for amphibious equipment.</li>
              <li>Design flat benches that allow cutter heads and dredge arms to extend safely.</li>
              <li>Direct inflows away from staging areas so we can keep turbidity low.</li>
            </ul>
          </div>
          <div className="relative h-96 overflow-hidden rounded-3xl border border-white/10">
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
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Stormwater readiness</h3>
            <p className="text-sm text-slate-200">
              We plan maintenance windows so the pond is clean before high-flow seasons.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
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
          <h2 className="text-3xl font-bold">Start designing for easy amphibious work</h2>
          <p className="text-slate-300">
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
