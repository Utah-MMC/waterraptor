import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Aeration & Oxygen Programs | Water Raptor",
  description:
    "Comprehensive aeration and oxygen management programs designed to work with The Water Raptor harvesting schedule. Keep lakes oxygen-rich and ready for harvest operations. Coordinate aeration systems with amphibious maintenance to maintain healthy water quality and support aquatic life.",
  keywords: "aeration programs, oxygenation, lake aeration, Water Raptor aeration support, pond aeration schedule",
  openGraph: {
    title: "Aeration & Oxygen Programs | Water Raptor",
    description:
      "Comprehensive aeration and oxygen management programs designed to work with The Water Raptor harvesting schedule.",
    url: "https://waterraptor.com/resources/aeration-programs",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/image004.jpg",
        width: 1200,
        height: 630,
        alt: "Aeration and oxygen programs for lakes and ponds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeration & Oxygen Programs | Water Raptor",
    description: "Comprehensive aeration and oxygen management programs.",
  },
};

export default function AerationProgramsPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center space-y-6">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl text-white">Aeration & Oxygen Programs</h1>
        <p className="text-slate-200 max-w-3xl mx-auto">
          Combine aeration design with amphibious harvests so waterbodies stay oxygenated long after deployment.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/lake-services">See services</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resources/water-quality-testing">Review testing plans</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Match aeration to harvest rhythms</h2>
          <p className="text-slate-200">
            Plan aeration installs when The Water Raptor is already on-site harvesting heavy mats. That keeps oxygen strong and gives our crew time to service diffusers before fish stress appears.
          </p>
          <ul className="space-y-3 text-sm text-slate-200">
            <li>Prep diffuser routes once harvest cutlines are mapped.</li>
            <li>Use downstream conveyors to keep sediment from clogging diffusers.</li>
            <li>Pair fall aeration bursts with dredging for deeper clarity.</li>
          </ul>
        </div>
        <div className="relative h-96 overflow-hidden rounded-3xl border border-white/20">
          <Image
            src="/images/image005.png"
            alt="Aeration equipment near pond"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={138}
          count={6}
          title="Aeration-ready deployments"
          description="Photos showing how we install or service aeration systems alongside Water Raptor harvests."
          ctaLabel="Discuss aeration planning"
          ctaHref="/contact"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold text-white">Need a custom aeration plan?</h2>
          <p className="text-slate-200">
            Provide pond size, depth, and fish needs and we will align aeration timing with amphibious harvesting for steady oxygenation.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
