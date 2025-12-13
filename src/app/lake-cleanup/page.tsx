import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Lake Cleanup | WaterRaptor.com",
  description:
    "Lake cleanup powered by The Water Raptor. Remove debris, floating mats, and trash with the amphibious tool.",
  keywords: "lake cleanup, debris removal, aquatic trash pickup, pond cleanup, Water Raptor",
  openGraph: {
    title: "Lake Cleanup | WaterRaptor.com",
    description:
      "Harbor The Water Raptor to clean floating mats, trash, and invasive beds from ponds and lakes.",
    url: "https://waterraptor.com/lake-cleanup",
  },
};

const heroImages = [
  { src: "/images/IMG_3489.webp", alt: "Floating debris cleanup", label: "Debris sweep" },
  { src: "/images/IMG_3491.webp", alt: "Shoreline clean after harvest", label: "Shoreline tidy" },
];

const highlights = [
  {
    title: "Debris & mat removal",
    detail: "The Water Raptor pulls floating trash and thick vegetation directly into shoreline piles.",
  },
  {
    title: "No dock needed",
    detail: "Tracked mobility lets us enter the water where others struggle, so cleanup happens faster.",
  },
  {
    title: "Community-ready results",
    detail: "We stage cleanups before events, recreation seasons, or approvals to impress stakeholders.",
  },
  {
    title: "Follow-up insights",
    detail: "Photo reports and biomass totals prove the project delivered clarity.",
  },
];

export default function LakeCleanupPage() {
  return (
    <ServicePageLayout
      badge="Lake Cleanup"
      title="Lake cleanup for every pond and shoreline"
      summary="Remove trash, mats, and vegetation with The Water Raptor so your lake shines for residents and visitors."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="lakeCleanup"
      galleryTitle="Cleanup field logs"
      galleryDescription="Photos of targeted cleanups, landing harvests, and cleared shorelines."
      mediaOffset={24}
      resourceLabel="Browse resource guides"
      resourceHref="/resources"
      contactNote="Describe the nuisance mats or trash line and we will route the amphibious crew."
      ctaLabel="Schedule a cleanup"
      ctaHref="#contact-form"
    />
  );
}
