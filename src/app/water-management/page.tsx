import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Water Management | WaterRaptor.com",
  description:
    "River and canal management with The Water Raptor. Remove debris, trim weeds, and keep flow corridors moving.",
  keywords: "river management, canal cleaning, aquatic debris removal, Water Raptor river work, pond management",
  openGraph: {
    title: "Water Management | WaterRaptor.com",
    description:
      "The Water Raptor keeps rivers, canals, and stormwater corridors clear with amphibious debris removal and trimming.",
    url: "https://waterraptor.com/water-management",
  },
};

const heroImages = [
  { src: "/images/IMG_3545.webp", alt: "Water Raptor on canal", label: "Canal sweep" },
  { src: "/images/IMG_3546.webp", alt: "Debris removal in river", label: "River care" },
];

const highlights = [
  {
    title: "Canal clearing",
    detail: "We trim channel sides, clear debris, and keep water flowing without shutting irrigation down.",
  },
  {
    title: "River debris removal",
    detail: "The amphibious hull glides through pools to collect logs, mats, and tree limbs.",
  },
  {
    title: "Stormwater readiness",
    detail: "We prep stormwater ponds and spillways for high-flow seasons with scheduled passes.",
  },
  {
    title: "Flow monitoring",
    detail: "Crew data captures sediment, weed density, and flow to prioritize future harvests.",
  },
];

export default function WaterManagementPage() {
  return (
    <ServicePageLayout
      badge="River & Canal Management"
      title="Water management with the amphibious Water Raptor"
      summary="Maintain rivers, canals, and stormwater basins with debris removal, trimming, and scheduled harvests."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="waterManagement"
      galleryTitle="Water management runs"
      galleryDescription="Used to track how The Water Raptor keeps corridors clear and flowing."
      mediaOffset={42}
      resourceLabel="Browse resource guides"
      resourceHref="/resources"
      contactNote="Describe your channel or stormwater basin and we will route a crew with the amphibious machine."
      ctaLabel="Plan river or canal work"
      ctaHref="#contact-form"
    />
  );
}
