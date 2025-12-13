import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Lake Dredging | WaterRaptor.com",
  description:
    "Targeted hydraulic dredging using The Water Raptor. Remove sediment, restore depth, and keep water quality clear.",
  keywords: "lake dredging, hydraulic dredging, sediment removal, Water Raptor dredge, pond deepening",
  openGraph: {
    title: "Lake Dredging | WaterRaptor.com",
    description:
      "The Water Raptor deploys dredge pumps and conveyors to excavate muck and restore depth for healthy lakes.",
    url: "https://waterraptor.com/lake-dredging",
  },
};

const heroImages = [
  { src: "/images/IMG_3486.webp", alt: "Dredge pump staging", label: "Pump staging" },
  { src: "/images/IMG_3487.webp", alt: "Sediment removal near shore", label: "Sediment hauling" },
];

const highlights = [
  {
    title: "Precision dredging",
    detail: "We map muck, place hoses, and keep the amphibious hull steady while removing nutrient-rich sediments.",
  },
  {
    title: "Conveyors & hauls",
    detail: "Harvested sediment loads onto shore or into barges without shutting down the lake.",
  },
  {
    title: "Depth restored",
    detail: "Dredging unlocks new swimming depth, better oxygen, and improved fish habitat.",
  },
  {
    title: "Post-dredge monitoring",
    detail: "Follow-up clarifies how the waterbody recovers, so we can schedule the next maintenance pass.",
  },
];

export default function LakeDredgingPage() {
  return (
    <ServicePageLayout
      badge="Hydraulic Dredging"
      title="Lake dredging with the amphibious Water Raptor"
      summary="The Water Raptor lifts muck, runs dredge pumps, and moves sediment so lakes stay deep and clear."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="lakeDredging"
      galleryTitle="Dredge clarity stories"
      galleryDescription="Photos of The Water Raptor clearing muck, restoring shorelines, and documenting depth recoveries."
      mediaOffset={18}
      resourceLabel="Browse resource guides"
      resourceHref="/resources"
      contactNote="Share location, depth issues, and muck depth so our team can stage a dredge assessment."
      ctaLabel="Request dredging support"
      ctaHref="#contact-form"
    />
  );
}
