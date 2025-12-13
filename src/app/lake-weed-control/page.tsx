import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Lake Weed Control | WaterRaptor.com",
  description:
    "Professional lake weed control services using The Water Raptor amphibious machine. Expert mechanical harvesting and herbicide staging to remove algae, milfoil, cattails, and invasive aquatic plants. Serving Utah with comprehensive weed management solutions.",
  keywords: "lake weed control, aquatic weed removal, herbicide staging, Water Raptor, invasive plant control",
  openGraph: {
    title: "Lake Weed Control | WaterRaptor.com",
    description:
      "Professional lake weed control services using The Water Raptor amphibious machine. Expert mechanical harvesting and herbicide staging to remove algae, milfoil, cattails, and invasive aquatic plants.",
    url: "https://waterraptor.com/lake-weed-control",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/IMG_3542.webp",
        width: 1200,
        height: 630,
        alt: "Lake weed control with Water Raptor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lake Weed Control | WaterRaptor.com",
    description: "Professional lake weed control services using The Water Raptor amphibious machine.",
  },
};

const heroImages = [
  { src: "/images/IMG_3542.webp", alt: "Weed control harvest", label: "Dense weed mats" },
  { src: "/images/IMG_3544.webp", alt: "Clean lake edge after removal", label: "Clean edges" },
];

const highlights = [
  {
    title: "Mechanical removal",
    detail: "Cut, rake, and collect invasive weeds with cutters and conveyors built for the amphibious hull.",
  },
  {
    title: "Herbicide staging",
    detail: "The Water Raptor supports crew access, chemical delivery, and data capture for targeted treatments.",
  },
  {
    title: "Mapping & tracking",
    detail: "We document species, spread, and biomass so future visits hit the right zones.",
  },
  {
    title: "Hybrid tactics",
    detail: "Our team blends harvest passes with upcoming herbicide or aeration to keep momentum.",
  },
];

export default function LakeWeedControlPage() {
  return (
    <ServicePageLayout
      badge="Invasive Weed Control"
      title="Lake weed control with Water Raptor precision"
      summary="Mechanical harvesting, herbicide staging, and follow-up tracking keep weeds under control."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="lakeWeedControl"
      galleryTitle="Weed control missions"
      galleryDescription="Images that capture the weeds we remove and the clarity we restore."
      mediaOffset={36}
      resourceLabel="Browse resource guides"
      resourceHref="/resources"
      contactNote="Tell us the species you want gone and we will combine harvesters, conveyors, and herbicide staging."
      ctaLabel="Attack invasive weeds"
      ctaHref="#contact-form"
    />
  );
}
