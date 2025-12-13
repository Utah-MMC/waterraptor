import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Pond & Lake Management Services | WaterRaptor.com",
  description:
    "Professional pond and lake management services powered by The Water Raptor. Integrated harvesting, monitoring, water quality management, and maintenance across ponds, lakes, and canals for healthy aquatic ecosystems.",
  keywords:
    "pond and lake management, lake management services, pond management, aquatic ecosystem management, water quality management, aquatic weed control, pond maintenance, lake maintenance, seasonal pond care, Water Raptor, Utah pond and lake management",
  openGraph: {
    title: "Pond & Lake Management Services | WaterRaptor.com",
    description:
      "Schedule comprehensive pond and lake management that pairs The Water Raptor harvests with monitoring, herbicide staging, nutrient response, and ongoing maintenance.",
    url: "https://waterraptor.com/lake-management",
  },
};

const heroImages = [
  { src: "/images/IMG_3395.webp", alt: "Lake management survey", label: "Data capture" },
  { src: "/images/IMG_3396.webp", alt: "Water Raptor cruising a calmer lake", label: "Steady presence" },
];

const highlights = [
  {
    title: "Seasonal clarity plans",
    detail: "We design harvesting, herbicide, and aeration windows so your lake stays in balance every quarter.",
  },
  {
    title: "Monitoring & reporting",
    detail: "Every deployment records water samples, plant types, and biomass volume for transparent planning.",
  },
  {
    title: "Herbicide staging",
    detail: "The amphibious crew supports safe chemical application with the Water Raptor as a mobile platform.",
  },
  {
    title: "Emergency readiness",
    detail: "We respond to blooms, debris, or low oxygen events within 24 hours using the same tracked machine.",
  },
];

export default function LakeManagementPage() {
  return (
    <ServicePageLayout
      badge="Professional Lake Management"
      title="Lake management built around The Water Raptor"
      summary="Integrated harvesting, monitoring, and maintenance so ponds, lakes, and canals stay within clarity targets."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="lakeManagement"
      galleryTitle="Lake management deployments"
      galleryDescription="From shoreline trimming to nutrient testing, these photos highlight The Water Raptor delivering control."
      mediaOffset={6}
      resourceLabel="Browse resource guides"
      resourceHref="/resources"
      contactNote="Share your management goals and we will align amphibious harvests, herbicide, and monitoring visits."
      ctaLabel="Plan a management visit"
      ctaHref="#contact-form"
    />
  );
}
