import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Aquatic Harvesting Services | Pond & Lake Management | WaterRaptor.com",
  description:
    "Professional aquatic harvesting services as part of comprehensive pond and lake management. The Water Raptor removes aquatic weeds, debris, and invasive mats to maintain healthy water bodies.",
  keywords: "aquatic harvesting, pond harvesting, lake harvesting, pond and lake management, aquatic vegetation removal, biomass collection, Water Raptor harvesting, amphibious harvesting services, pond maintenance",
  openGraph: {
    title: "Aquatic Harvesting Services | WaterRaptor.com",
    description:
      "Professional aquatic harvesting services for pond and lake management. The Water Raptor amphibious machine harvests dense aquatic vegetation while conveying biomass to shore.",
    url: "https://waterraptor.com/harvesting",
  },
};

const heroImages = [
  { src: "/images/IMG_3694.webp", alt: "Harvesting dense mats", label: "Heavy harvest" },
  { src: "/images/IMG_3696.webp", alt: "Shoreline biomass piles", label: "Hauling to shore" },
];

const highlights = [
  {
    title: "Adaptive harvest decks",
    detail: "Cutters, rakes, and conveyors swap quickly to match the vegetation we encounter.",
  },
  {
    title: "Biomass staging",
    detail: "Collected material moves to shore piles or trucks in one pass.",
  },
  {
    title: "Invasive control",
    detail: "Phragmites, milfoil, and algae mats get removed before seeds spread.",
  },
  {
    title: "Data-backed follow-up",
    detail: "We record biomass, species, and coverage so the next pass is already planned.",
  },
];

export default function HarvestingPage() {
  return (
    <ServicePageLayout
      badge="Harvesting Focus"
      title="Pond & lake harvesting with The Water Raptor"
      summary="We swarm thick aquatic vegetation with The Water Raptor so your waterbody stays navigable and clear."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="harvesting"
      galleryTitle="Harvesting portfolio"
      galleryDescription="Images from dense harvests, debris collections, and conveyors moving biomass."
      mediaOffset={66}
      resourceLabel="Explore harvest guides"
      resourceHref="/resources"
      contactNote="Tell us where the mats are thick and we will route the amphibious crew."
      ctaLabel="Request a harvest"
      ctaHref="#contact-form"
    />
  );
}
