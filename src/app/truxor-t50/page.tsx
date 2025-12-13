import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Truxor T50 | WaterRaptor.com",
  description:
    "Truxor T50 amphibious platform that becomes The Water Raptor. Learn about attachments and mobility that clear aquatic weeds.",
  keywords: "Truxor T50, amphibious harvester, Water Raptor equipment, aquatic weed cutter, pond machine",
  openGraph: {
    title: "Truxor T50 | WaterRaptor.com",
    description:
      "The Water Raptor is based on the Truxor T50 amphibious machine. Discover the attachments we deploy for harvesting and dredging.",
    url: "https://waterraptor.com/truxor-t50",
  },
};

const heroImages = [
  { src: "/images/IMG_3562.webp", alt: "Truxor cutting power", label: "Truxor at work" },
  { src: "/images/IMG_3563.webp", alt: "Close-up of Truxor tracks", label: "Amphibious tracks" },
];

const highlights = [
  {
    title: "Amphibious mobility",
    detail: "Tracks, pontoons, and hydrostatically powered drive keep the hull moving across mud and water.",
  },
  {
    title: "Attachment variety",
    detail: "We swap cutters, conveyors, dredge pumps, and grapples in minutes to match the job.",
  },
  {
    title: "Powerful harvesting",
    detail: "Hydraulic cutters and conveyors collect biomass and place it on shore or into barges.",
  },
  {
    title: "Crew comfort",
    detail: "Protected decks and controls keep operators steady during long harvest shifts.",
  },
];

export default function TruxorT50Page() {
  return (
    <ServicePageLayout
      badge="Truxor T50"
      title="The Water Raptor amphibious machine"
      summary="The Water Raptor is a Truxor T50 hull tuned for pond harvesting, dredging, and herbicide staging."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="truxorT50"
      galleryTitle="Truxor T50 features"
      galleryDescription="Details of the amphibious machine, attachments, and daily routines."
      mediaOffset={54}
      resourceLabel="Browse resource guides"
      resourceHref="/resources"
      contactNote="Learn how the Truxor T50 becomes The Water Raptor for your project and when we can deploy."
      ctaLabel="Explore the Truxor"
      ctaHref="#contact-form"
    />
  );
}
