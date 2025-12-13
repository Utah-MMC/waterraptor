import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Sonic Algae Control | Water Raptor",
  description:
    "Chemical-free sonic algae control solutions that pair with The Water Raptor for comprehensive lake management. Learn how ultrasonic algae treatment technology works with amphibious harvesting to deliver clean, clear water without harsh chemicals. Environmentally friendly algae management for ponds and lakes.",
  keywords: "sonic algae control, ultrasonic algae treatment, Water Raptor algae response, chemical-free algae management",
  openGraph: {
    title: "Sonic Algae Control | Water Raptor",
    description:
      "Chemical-free sonic algae control solutions that pair with The Water Raptor for comprehensive lake management.",
    url: "https://waterraptor.com/resources/sonic-algae-control",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonic Algae Control | Water Raptor",
    description: "Chemical-free sonic algae control solutions for ponds and lakes.",
  },
};

export default function SonicAlgaeControlPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-6 text-center">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl text-white">Sonic Algae Control & Water Raptor Support</h1>
        <p className="text-slate-200 max-w-3xl mx-auto">
          When sonic arrays need staging, The Water Raptor brings the platform, pumps, and crew to the right spot.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/lake-services">Book services</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Read insights</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Pairing electronics with amphibious mobility</h2>
            <p className="text-slate-200">
              Place sonar transducers from the shoreline, then let The Water Raptor sweep below the surface to remove algae that settles from the vibration.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>Use sonar for early detection while crews photograph blooms.</li>
              <li>Stage The Water Raptor near the arrays for ballast, power, and conveyors.</li>
              <li>Harvest mats that respond to sonic pulses before they sink.</li>
            </ul>
          </div>
          <div className="relative h-96 overflow-hidden rounded-3xl border border-white/20">
            <Image
              src="/images/image002.jpg"
              alt="Sonic algae control deployment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-white">Acoustic clarity</h3>
            <p className="text-sm text-slate-200">
              Sonic waves disturb algae so we can harvest it before toxins spread.
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-white">Amphibious staging</h3>
            <p className="text-sm text-slate-200">
              The Water Raptor secures sonar arrays, monitors currents, and supports follow-up treatments.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={120}
          count={6}
          title="Sonic algae gallery"
          description="Field frames that pair sonic treatments with harvesting and debris removal."
          ctaLabel="See algae control resources"
          ctaHref="/resources/toxic-algae-guide"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold text-white">Ready for sonic patrols?</h2>
          <p className="text-slate-200">
            Outline your algae type, desired treatment, and we will coordinate amphibious staging and sonic scheduling.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
