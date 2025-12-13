import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaShowcase } from "@/components/MediaShowcase";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Water Quality Testing & Response | Water Raptor",
  description:
    "Comprehensive water quality testing and response services for ponds and lakes. Field tests and lab analysis drive The Water Raptor's herbicide, harvesting, and dredging decisions. Sample phosphorus, nitrogen, dissolved oxygen, and clarity data to maintain healthy aquatic ecosystems.",
  keywords: "water quality testing, pond chemistry, Water Raptor labs, aquatic testing, nutrient response",
  openGraph: {
    title: "Water Quality Testing & Response | Water Raptor",
    description:
      "Comprehensive water quality testing and response services for ponds and lakes. Field tests and lab analysis drive The Water Raptor's herbicide, harvesting, and dredging decisions.",
    url: "https://waterraptor.com/resources/water-quality-testing",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/pondConsultation1000x800-768x614.webp",
        width: 1200,
        height: 630,
        alt: "Water quality testing for ponds and lakes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Quality Testing & Response | Water Raptor",
    description: "Comprehensive water quality testing and response services for ponds and lakes.",
  },
};

export default function WaterQualityTestingPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center space-y-6">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Resource
        </Badge>
        <h1 className="text-4xl font-bold md:text-5xl text-white">Water Quality Testing & Response</h1>
        <p className="text-slate-200 max-w-3xl mx-auto">
          Field tests and lab insight drive The Water Raptor&apos;s herbicide, harvesting, and dredging decisions.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/lake-management">See management services</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Read resource stories</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Collect data, then deploy</h2>
          <p className="text-slate-200">
            We sample phosphorus, nitrogen, dissolved oxygen, and clarity data before scheduling The Water Raptor for the next algae removal or dredging run.
          </p>
          <ul className="space-y-3 text-sm text-slate-200">
            <li>Use Shoreline readings to position herbicide swaths.</li>
            <li>Feed lab results to dredge crews so muck removal targets nutrient-laden layers.</li>
            <li>Document clarity improvements with before/after imagery for compliance.</li>
          </ul>
        </div>
        <div className="relative h-96 overflow-hidden rounded-3xl border border-white/20">
          <Image
            src="/images/pondConsultation1000x800-768x614.webp"
            alt="Water quality testing"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={156}
          count={6}
          title="Testing-driven deployments"
          description="Photos from surveys, sampling, and amphibious follow-through where The Water Raptor responds to data."
          ctaLabel="Pair data with a deployment"
          ctaHref="/lake-services"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to translate data into action?</h2>
          <p className="text-slate-200">
            Share your sampling results and goals so we can route a Water Raptor visit for harvest, herbicide, or dredging.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
