import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Annual Pond Management Programs | Water Raptor",
  description:
    "Comprehensive annual pond management programs designed to keep clarity goals on track. Schedule The Water Raptor for regular harvest, maintenance, and dredging operations throughout the year. Seasonal care plans that combine mechanical harvesting, herbicide staging, and water quality monitoring.",
  keywords: "annual pond management, lake maintenance program, Water Raptor schedule, seasonal pond care",
  openGraph: {
    title: "Annual Pond Management Programs | Water Raptor",
    description:
      "Comprehensive annual pond management programs designed to keep clarity goals on track with scheduled Water Raptor operations.",
    url: "https://waterraptor.com/resources/annual-pond-management-programs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Annual Pond Management Programs | Water Raptor",
    description: "Comprehensive annual pond management programs for healthy water bodies.",
  },
};

export default function AnnualPondManagementPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-6 text-center">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl text-white">Annual Pond Management Programs</h1>
        <p className="text-slate-200 max-w-3xl mx-auto">
          A seasonal calendar ensures The Water Raptor shows up when ice melts, algae blooms, or sediment builds up.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/lake-maintenance">Maintenance programs</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Read insights</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Plan ahead for clarity</h2>
            <p className="text-slate-200">
              Annual planning maps out harvest, dredge, and herbicide windows so every pond stays
              safe and usable. We align seasonal milestones with The Water Raptor crew schedule.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>Spring: clear nutrient-loaded vegetation before warm weather.</li>
              <li>Summer: monitor clarity, harvest floating mats, and prep herbicide passes.</li>
              <li>Fall/winter: dredge muck and shorelines so ice and storms have clean banks.</li>
            </ul>
          </div>
          <div className="relative h-96 overflow-hidden rounded-3xl border border-white/20">
            <Image
              src="/images/image004.jpg"
              alt="Seasonal pond planning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Spring harvest planning",
            "Summer clarity checks",
            "Fall dredging prep",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-6 text-sm text-slate-200 shadow-lg">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={132}
          count={6}
          title="Seasonal deployment gallery"
          description="The Water Raptor on the schedule for harvests, maintenance, and dredging through the year."
          ctaLabel="Talk about annual programs"
          ctaHref="/lake-services"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to plan your year?</h2>
          <p className="text-slate-200">
            Outline the waterbody, target dates, and goals so we can coordinate a Water Raptor-first
            program that keeps your pond ready for whatever season is next.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
