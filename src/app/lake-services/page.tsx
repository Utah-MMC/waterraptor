import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Pond & Lake Services | WaterRaptor.com",
  description:
    "Comprehensive pond and lake management services powered by The Water Raptor amphibious machine. Professional harvesting, dredging, weed control, and water quality management for healthy aquatic ecosystems.",
  keywords:
    "pond and lake management, lake services, pond services, pond management services, lake management services, aquatic ecosystem management, pond maintenance, lake maintenance, Water Raptor services, Utah pond and lake management",
  openGraph: {
    title: "Pond & Lake Services | WaterRaptor.com",
    description:
      "Comprehensive pond and lake management services including harvesting, dredging, weed control, and ongoing maintenance across ponds and reservoirs.",
    url: "https://waterraptor.com/lake-services",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/IMG_3393.webp",
        width: 1200,
        height: 630,
        alt: "Pond and lake services with Water Raptor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pond & Lake Services | WaterRaptor.com",
    description: "Comprehensive pond and lake management services powered by The Water Raptor.",
  },
};

const heroImages = [
  { src: "/images/IMG_3393.webp", alt: "Water Raptor harvesting aquatic beds", label: "Invasive mats" },
  { src: "/images/IMG_3394.webp", alt: "Cleared shoreline after harvest", label: "Clean margins" },
];

const highlights = [
  {
    title: "Amphibious harvests",
    detail: "The Water Raptor clears dense mats and floating debris without barges, hauling biomass straight to shore.",
  },
  {
    title: "Invasive response",
    detail: "Target cattails, milfoil, and algae blooms with cutters, conveyors, and tactical herbicide staging.",
  },
  {
    title: "Managed follow-up",
    detail: "Every job includes reporting, image proof, and recommended follow-up to lock in clarity.",
  },
  {
    title: "Regional readiness",
    detail: "We move across Utah and neighboring states with the same amphibious crew and Truxor equipment.",
  },
];

export default function LakeServicesPage() {
  return (
    <ServicePageLayout
      badge="Complete Lake Solutions"
      title="Lake services powered by The Water Raptor"
      summary="Mobile amphibious crews harvest aquatic weeds, stage herbicide, and haul muck so your lake stays ready for recreation."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="lakeServices"
      galleryTitle="Lake services snapshots"
      galleryDescription="Field frames from harvests, herbicide staging, and shoreline cleanups completed with the amphibious Water Raptor."
      mediaOffset={0}
      resourceLabel="Browse resource guides"
      resourceHref="/resources"
      contactNote="Tell us about your pond or lake and our dispatch desk routes the request straight to the amphibious crew."
      ctaLabel="Book a harvest"
      ctaHref="#contact-form"
    />
  );
}
