import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Invasive Aquatic Plants | WaterRaptor.com",
  description:
    "Target invasive aquatic plants with The Water Raptor. Remove cattails, milfoil, and phragmites with amphibious harvesting.",
  keywords: "invasive aquatic plants, phragmites removal, cattail harvesting, amphibious invasive control, Water Raptor",
  openGraph: {
    title: "Invasive Aquatic Plants | WaterRaptor.com",
    description:
      "We harvest invasive plants using The Water Raptor and document regrowth so your lake stays balanced.",
    url: "https://waterraptor.com/invasive-aquatic-plants",
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
