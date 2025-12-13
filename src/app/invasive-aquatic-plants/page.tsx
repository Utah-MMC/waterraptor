import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Invasive Aquatic Plants | WaterRaptor.com",
  description:
    "Professional invasive aquatic plant control services using The Water Raptor amphibious machine. Remove cattails, milfoil, phragmites, and other invasive species with precision harvesting. Species-focused removal with proper cutter heads and follow-up plans to keep lakes balanced and healthy.",
  keywords: "invasive aquatic plants, phragmites removal, cattail harvesting, amphibious invasive control, Water Raptor",
  openGraph: {
    title: "Invasive Aquatic Plants | WaterRaptor.com",
    description:
      "Professional invasive aquatic plant control services using The Water Raptor. Remove cattails, milfoil, and phragmites with amphibious harvesting.",
    url: "https://waterraptor.com/invasive-aquatic-plants",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/IMG_3697.webp",
        width: 1200,
        height: 630,
        alt: "Invasive aquatic plant control services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invasive Aquatic Plants | WaterRaptor.com",
    description: "Professional invasive aquatic plant control services using The Water Raptor.",
  },
};

const heroImages = [
  { src: "/images/IMG_3697.webp", alt: "Cattails on the shoreline", label: "Cattail bed" },
  { src: "/images/IMG_3698.webp", alt: "Cleared invasive stand", label: "Cleared zone" },
];

const highlights = [
  {
    title: "Species focus",
    detail: "We identify milfoil, phragmites, and others to pair the right cutter head and follow-up plan.",
  },
  {
    title: "Mechanical removal",
    detail: "The Water Raptor cuts, rakes, and exports invasive biomass with minimal disturbance.",
  },
  {
    title: "Regrowth tracking",
    detail: "Our crew maps return growth so the next visit hits the same location faster.",
  },
  {
    title: "Herbicide support",
    detail: "We stage crews for targeted herbicide while the amphibious platform keeps access steady.",
  },
];

export default function InvasivePlantsPage() {
  return (
    <ServicePageLayout
      badge="Invasive Aquatic Plants"
      title="Control invasive aquatic plants with Water Raptor power"
      summary="Mechanical harvesting and mapping combined with follow-up herbicide keep cattails, milfoil, and phragmites in check."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="invasiveAquaticPlants"
      galleryTitle="Invasive plant highlights"
      galleryDescription="Field images from invasive plant harvests and shoreline restoration."
      mediaOffset={72}
      resourceLabel="Explore invasive plant guides"
      resourceHref="/resources"
      contactNote="Share the invasive species squeezed into your waterbody and we will stage a removal run."
      ctaLabel="Plan invasive work"
      ctaHref="#contact-form"
    />
  );
}
