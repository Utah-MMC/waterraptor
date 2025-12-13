import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Lake Maintenance | WaterRaptor.com",
  description:
    "Carefully scheduled lake maintenance executed by The Water Raptor. Routine harvesting, debris removal, and shoreline prep.",
  keywords: "lake maintenance, pond upkeep, aquatic weed removal, Water Raptor maintenance, Utah lake services",
  openGraph: {
    title: "Lake Maintenance | WaterRaptor.com",
    description:
      "The Water Raptor crew delivers weekly and monthly maintenance to keep algae, mats, and debris from returning.",
    url: "https://waterraptor.com/lake-maintenance",
  },
};

const heroImages = [
  { src: "/images/IMG_3421.webp", alt: "Water Raptor cleaning canal", label: "Routine sweeps" },
  { src: "/images/IMG_3423.webp", alt: "Crew prepping maintenance deck", label: "Deck prep" },
];

const highlights = [
  {
    title: "Reliable harvest windows",
    detail: "We keep a seasonal calendar so The Water Raptor is on-site before invasive plants dominate.",
  },
  {
    title: "Debris & biomass removal",
    detail: "Floating trash and muck get pulled to shore through conveyors while the machine stays mobile.",
  },
  {
    title: "Reporting & next steps",
    detail: "Each visit delivers photos, biomass totals, and recommended follow-up for your team.",
  },
  {
    title: "Herbicide coordination",
    detail: "We stage chemical crews and drones with the amphibious platform for safe access.",
  },
];

export default function LakeMaintenancePage() {
  return (
    <ServicePageLayout
      badge="Scheduled Maintenance"
      title="Lake maintenance that keeps clarity steady"
      summary="Routine harvests, debris removal, and shoreline prep so algae and invasive plants never fully return."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="lakeMaintenance"
      galleryTitle="Maintenance missions"
      galleryDescription="Photos of The Water Raptor executing follow-up visits to stay ahead of regrowth."
      mediaOffset={12}
      resourceLabel="Browse resource guides"
      resourceHref="/resources"
      contactNote="Describe your maintenance needs and we will plan The Water Raptor’s next visit within 48 hours."
      ctaLabel="Schedule maintenance"
      ctaHref="#contact-form"
    />
  );
}
