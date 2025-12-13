import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Shoreline Restoration | Water Raptor",
  description:
    "Rebuild shorelines, deploy vegetative buffers, and stabilize banks with amphibious staging from The Water Raptor.",
  keywords: "shoreline restoration, riprap, vegetative buffers, amphibious shoreline work, Water Raptor shore",
};

export default function ShorelineRestorationPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center space-y-6">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl">Shoreline Restoration</h1>
        <p className="text-slate-300">
          Use The Water Raptor to rebuild shorelines, plant buffers, and stabilize erosion-prone banks without barges.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/services/habitat-restoration">Explore habitat work</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resources/sediment-removal-plans">See sediment plans</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Buffer, stabilize, and protect</h2>
          <p className="text-slate-300">
            Stage The Water Raptor near the bank, cut invasive reeds, and place rip-rap while crews anchor coir logs and native plants.
          </p>
          <ul className="space-y-3 text-sm text-slate-200">
            <li>Clear debris and invasive stands before planting.</li>
            <li>Use amphibious load capacity to transport rock, logs, and plant mats.</li>
            <li>Document long-term erosion markers after each deployment.</li>
          </ul>
        </div>
        <div className="relative h-96 overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/images/image004.jpg"
            alt="Shoreline work in progress"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={150}
          count={6}
          title="Shoreline restoration gallery"
          description="Water Raptor crews rebuilding shorelines with rip-rap, planting, and erosion control."
          ctaLabel="Plan shoreline work"
          ctaHref="/habitat-restoration"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold">Ready for shoreline stabilization?</h2>
          <p className="text-slate-300">
            Share your erosion challenges and we will stage the amphibious machine to rebuild banks or install buffers.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
