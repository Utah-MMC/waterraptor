import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import Truxor3DViewer from "./Truxor3DViewer";

export const metadata: Metadata = {
  title: "Truxor T50 | WaterRaptor.com",
  description:
    "Learn about the Truxor T50 amphibious platform that powers The Water Raptor. Discover attachments, mobility features, and capabilities that clear aquatic weeds, remove sediment, and maintain healthy water bodies. Tracked amphibious machine with versatile tool options.",
  keywords: "Truxor T50, amphibious harvester, Water Raptor equipment, aquatic weed cutter, pond machine",
  openGraph: {
    title: "Truxor T50 | WaterRaptor.com",
    description:
      "Learn about the Truxor T50 amphibious platform that powers The Water Raptor. Discover attachments and mobility features for aquatic management.",
    url: "https://waterraptor.com/water-raptor",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/IMG_3562.webp",
        width: 1200,
        height: 630,
        alt: "Truxor T50 amphibious platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Truxor T50 | WaterRaptor.com",
    description: "Learn about the Truxor T50 amphibious platform that powers The Water Raptor.",
  },
};

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
      heroContent={<Truxor3DViewer />}
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

