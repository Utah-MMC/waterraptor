import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Mechanical Solutions 101 | Water Raptor",
  description:
    "Mechanical harvesting, dredging, and attachment choices for The Water Raptor explained in one guide.",
  keywords: "mechanical harvesting, amphibious attachments, Water Raptor truxor, dredging attachments, aquatic equipment",
};

export default function MechanicalSolutionsPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-6 text-center">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl">Mechanical Solutions 101</h1>
        <p className="text-slate-300">
          Attachment choices, harvest tactics, and dredge sequences all start with the amphibious Water Raptor platform.
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
            <h2 className="text-3xl font-semibold">Choose the right tools</h2>
            <p className="text-slate-300">
              We swap cutter heads, conveyors, dredge pumps, and grapples in minutes so the same machine
              can harvest, dredge, and stage herbicide work without downtime.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>Cutting attachments trim dense vegetation while conveyors collect biomass.</li>
              <li>Dredge pumps remove muck while stabilizing outriggers keep the hull steady.</li>
              <li>Grapples and grapnel arms clear debris that would otherwise clog the harvest deck.</li>
            </ul>
          </div>
          <div className="relative h-96 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/image003.jpg"
              alt="Mechanical solutions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Quick-change brackets keep attachments organized",
            "Heavy-duty conveyors load biomass while cutters run",
            "Dredge pumps and grapples restore channels and bottom depth",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={126}
          count={6}
          title="Mechanical deployments"
          description="The Water Raptor switching tools, clearing mats, and dredging while staying amphibious."
          ctaLabel="Book harvest and dredge support"
          ctaHref="/lake-dredging"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold">Need help picking attachments?</h2>
          <p className="text-slate-300">
            Share the aquatic weeds, sediment, or debris you face and we will tune The Water Raptor for the job.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
