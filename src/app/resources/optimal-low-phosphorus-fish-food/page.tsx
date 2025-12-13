import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Optimal Low-Phosphorus Fish Food | Water Raptor",
  description:
    "Complete guide to low-phosphorus fish food selection and feeding strategies for pond management. Learn how low-phosphorus fish food cuts nutrient loading while The Water Raptor keeps ponds clear during feed cycles. Reduce algae blooms and maintain water quality with proper nutrition management.",
  keywords: "low phosphorus fish food, pond nutrition, fish feeding guide, pond dredging, Water Raptor nutrient control",
  openGraph: {
    title: "Optimal Low-Phosphorus Fish Food | Water Raptor",
    description:
      "Complete guide to low-phosphorus fish food selection and feeding strategies for pond management. Reduce algae blooms and maintain water quality.",
    url: "https://waterraptor.com/resources/optimal-low-phosphorus-fish-food",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/image004.jpg",
        width: 1200,
        height: 630,
        alt: "Low-phosphorus fish food guide for pond management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimal Low-Phosphorus Fish Food | Water Raptor",
    description: "Complete guide to low-phosphorus fish food for pond management.",
  },
};

export default function LowPhosphorusFishFoodPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-6 text-center">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl text-white">Optimal Low-Phosphorus Fish Food</h1>
        <p className="text-slate-200 max-w-3xl mx-auto">
          Feeding right is the first step to clarity. We pair shore-based nutrition plans with
          The Water Raptor so every feeding window is followed by harvesting and muck removal that
          keeps phosphorus at bay.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/lake-services">See services</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Read insights</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Protect water quality during every feed</h2>
            <p className="text-slate-200">
              Choose feed with 4-6% phosphorus, deliver it in single meals, and clear the leftovers
              with The Water Raptor. Our amphibious crew removes decaying biomass so the nutrient
              pulse never turns into a bloom.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>Measure phosphorus release and adjust feed rations seasonally.</li>
              <li>Target forage fish meals near the shore so conveyors can collect debris.</li>
              <li>Follow every feeding with a Water Raptor sweep that collects solids and sediment.</li>
            </ul>
          </div>
          <div className="relative h-96 overflow-hidden rounded-3xl border border-white/20">
            <Image
              src="/images/pondConsultation1000x800-768x614.webp"
              alt="Feeding and fish management"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Controlled food selection",
              detail: "Lean diets drop nutrient content without harming growth rates.",
            },
            {
              title: "Timed feedings",
              detail: "Deliver meals before cooler nights so waste is trapped near shore for easy harvest.",
            },
            {
              title: "Post-feed harvesting",
              detail: "Harvest the leftovers with conveyors before they break down into phosphorus.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-6 text-sm text-slate-200 shadow-lg">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={102}
          count={6}
          title="Nutrient-aware deployments"
          description="From feeding consultation to amphibious cleanup, these deployments keep phosphorus low."
          ctaLabel="Review nutrient reduction resources"
          ctaHref="/nutrient-reduction"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold text-white">Pair the right feed with targeted harvesting</h2>
          <p className="text-slate-200">
            Describe your fish program or nutrient concerns and we will route the request to the
            crew that stages The Water Raptor for harvest, herbicide staging, or dredging.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
