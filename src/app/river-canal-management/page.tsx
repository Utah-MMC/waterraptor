import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "River & Canal Management | WaterRaptor.com",
  description:
    "River and canal management with The Water Raptor. Keep flow corridors moving with amphibious debris removal and trimming.",
  keywords: "river canal management, debris removal, Water Raptor river work, canal clearing, stormwater pond management",
  openGraph: {
    title: "River & Canal Management | WaterRaptor.com",
    description:
      "The Water Raptor keeps rivers, canals, and stormwater basins flowing through amphibious clearing and trimming.",
    url: "https://waterraptor.com/river-canal-management",
  },
};

const heroImages = [
  { src: "/images/IMG_3717.webp", alt: "River debris cleanup", label: "River cleanup" },
  { src: "/images/IMG_3718.webp", alt: "Canal management commute", label: "Canal work" },
];

const highlights = [
  {
    title: "Flow corridors",
    detail: "We keep rivers and canals open by clearing debris, trimming vegetation, and dredging where needed.",
  },
  {
    title: "Stormwater readiness",
    detail: "Pre-season checks keep basins ready so run-off drains properly.",
  },
  {
    title: "Erosion control",
    detail: "The Water Raptor supports riprap installs and bank repair without shutting down flows.",
  },
  {
    title: "Emergency response",
    detail: "High-water events trigger rapid amphibious deployment to protect critical corridors.",
  },
];

export default function RiverCanalManagementPage() {
  return (
    <ServicePageLayout
      badge="River & Canal Management"
      title="River and canal management with The Water Raptor"
      summary="Debris removal, trimming, and emergency response for established corridors."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="riverCanalManagement"
      galleryTitle="River & canal management"
      galleryDescription="Photos of corridor clearing, riprap work, and stormwater readiness."
      mediaOffset={96}
      resourceLabel="Explore river & canal guides"
      resourceHref="/resources"
      contactNote="Share the canal or river you manage and we will schedule a pass."
      ctaLabel="Plan river or canal work"
      ctaHref="#contact-form"
    />
  );
}
