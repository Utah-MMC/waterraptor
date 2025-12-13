import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Lake Restoration | WaterRaptor.com",
  description:
    "Lake restoration anchored by The Water Raptor. Rebuild clarity, fix shorelines, and balance ecosystems.",
  keywords: "lake restoration, shoreline rehab, aquatic restoration, Water Raptor restoration, sediment restoration",
  openGraph: {
    title: "Lake Restoration | WaterRaptor.com",
    description:
      "We combine amphibious harvesting with shoreline work to restore ponds, lakes, and reservoirs.",
    url: "https://waterraptor.com/lake-restoration",
  },
};

const heroImages = [
  { src: "/images/IMG_3495.webp", alt: "Before and after restorative work", label: "Restoration pair" },
  { src: "/images/IMG_3540.webp", alt: "Shoreline repair by crew", label: "Bank rebuild" },
];

const highlights = [
  {
    title: "Balance restoration",
    detail: "We combine sediment removal with shoreline rebuilding and native planting for lasting stability.",
  },
  {
    title: "Aquatic weed resets",
    detail: "Harvesting and herbicide work clears invasive pressure before the new shoreline goes in.",
  },
  {
    title: "Depth & clarity",
    detail: "Dredging and maintenance loops keep the restored sections open and fishable.",
  },
  {
    title: "Ongoing follow-up",
    detail: "We monitor clarity, plant survival, and debris so the restoration holds through seasons.",
  },
];

export default function LakeRestorationPage() {
  return (
    <ServicePageLayout
      badge="Lake Restoration"
      title="Restoration driven by The Water Raptor"
      summary="Rebuild shoreline buffers, remove muck, and balance vegetation with amphibious precision."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="lakeRestoration"
      galleryTitle="Restoration stories"
      galleryDescription="Field frames from habitat rebuilding, dredging, and shoreline stabilization work."
      mediaOffset={30}
      resourceLabel="Browse resource guides"
      resourceHref="/resources"
      contactNote="Tell us about the lake you want to restore and we will stage a multi-phase plan."
      ctaLabel="Launch a restoration"
      ctaHref="#contact-form"
    />
  );
}
