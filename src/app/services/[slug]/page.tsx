import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MediaShowcase } from "@/components/MediaShowcase";
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

type ServiceProfile = {
  title: string;
  description: string;
  summary: string;
  keywords: string;
};

const SERVICE_PROFILES: Record<string, ServiceProfile> = {
  "wetland-planting-service": {
    title: "Wetland Planting & Shoreline Buffers",
    description: "Use The Water Raptor to plant natives, build buffers, and protect shorelines from erosion.",
    summary:
      "We load plants, substrates, and crew onto the amphibious hull, plant seedlings along wetlands, and stabilize banks before invasive species take over.",
    keywords: "wetland planting, shoreline buffers, habitat plants, amphibious planting",
  },
  "habitat-installation-service": {
    title: "Habitat Installation & Structures",
    description: "Install brush bundles, coir logs, and habitat structures with amphibious precision.",
    summary:
      "Our crew drops habitat bundles, rock reefs, and spawning structure while The Water Raptor keeps the work area afloat and steady.",
    keywords: "habitat installation, shoreline structures, rock reefs, amphibious habitat work",
  },
  "invasive-weed-control-service": {
    title: "Invasive Weed Control",
    description: "Target invasive cattails, phragmites, and reeds with cutting, raking, and pull-back attachments.",
    summary:
      "We cut, rake, and collect invasives before they seed, blending herbicide staging with mechanical removal for quick results.",
    keywords: "invasive weed control, reed removal, cattail harvesting, amphibious weed projects",
  },
  "lake-mapping-service": {
    title: "Lake Mapping & Surveys",
    description: "Conduct bathymetry, depth surveys, and nutrient mapping with The Water Raptor as the mobile platform.",
    summary:
      "Our amphibious crew collects sonar, sediment cores, and water quality data so you can plan dredging or maintenance accurately.",
    keywords: "lake mapping, bathymetric surveys, water quality mapping, amphibious data",
  },
  "cattail-control-service": {
    title: "Cattail & Bulrush Control",
    description: "Remove thick cattails with cutters, grapples, and conveyances to keep spread at bay.",
    summary:
      "The Water Raptor slices through cattail stems, collects biomass, and leaves riparian zones accessible for boating.",
    keywords: "cattail control, bulrush removal, amphibious cutting, cattail harvesting",
  },
  "rip-rap-and-shoreline-weed-control-service": {
    title: "Rip-Rap & Shoreline Weed Control",
    description: "Blend shoreline weed cleanup with rip-rap installation using amphibious handling.",
    summary:
      "We clear weeds, place rock lining, and stabilize slopes while the amphibious platform supports crews and materials.",
    keywords: "rip-rap shoreline, shoreline weed control, bank stabilization, amphibious shore work",
  },
  "fish-population-survey": {
    title: "Fish Population Surveys",
    description: "Support fisheries management by staging surveys and stocking with amphibious access.",
    summary:
      "The Water Raptor helps crews monitor fish populations, stock forage fish, and keep habitats balanced without boats.",
    keywords: "fish population surveys, aquatic biology, amphibious fisheries support",
  },
  "fish-stocking": {
    title: "Fish Stocking & Deliveries",
    description: "Deliver and release forage fish, triploid carp, and species targeted for ecological balance.",
    summary:
      "We load tanks, drive into the pond, and carefully release fish while dredging or nutrient teams observe.",
    keywords: "fish stocking, forage fish, amphibious stocking, fish deliveries",
  },
  "lake-and-pond-management-services": {
    title: "Lake & Pond Management Services",
    description: "Comprehensive management that ties together harvesting, herbicide, and dredging.",
    summary:
      "The Water Raptor becomes the operations center for seasonal plans covering clarity, vegetation, and shoreline access.",
    keywords: "lake management services, pond management, amphibious planning, seasonal lake care",
  },
};

export async function generateStaticParams() {
  return Object.keys(SERVICE_PROFILES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const profile = SERVICE_PROFILES[params.slug];
  if (!profile) {
    return {
      title: "Water Raptor Services",
      description: "Amphibious projects powered by The Water Raptor.",
    };
  }
  
  const title = `${profile.title} | Water Raptor`;
  const description = `${profile.description} Professional amphibious services using The Water Raptor for efficient pond and lake management.`;
  
  return {
    title,
    description,
    keywords: profile.keywords,
    openGraph: {
      title,
      description,
      url: `https://waterraptor.com/services/${params.slug}`,
      type: "website",
      images: [
        {
          url: "https://waterraptor.com/images/image004.jpg",
          width: 1200,
          height: 630,
          alt: profile.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const profile = SERVICE_PROFILES[params.slug];
  if (!profile) {
    return <div className="min-h-screen text-white">Service not found.</div>;
  }

  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-6">
        <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-900">
          Additional Services
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">{profile.title}</h1>
        <p className="text-lg text-slate-300 max-w-3xl">{profile.summary}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-emerald-500 text-slate-900">
            <Link href="/lake-services">Back to services</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contact-form">Contact us</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <MediaShowcase
          offset={60}
          count={6}
          title="Project imagery"
          description="Water Raptor crews in action for this service."
        />
      </section>

      <section id="contact-form" className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Schedule this work</p>
          <h2 className="text-3xl font-bold">Talk to The Water Raptor crew</h2>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
