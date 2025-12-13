import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Water Quality Management for Ponds & Lakes | WaterRaptor.com",
  description:
    "Comprehensive water quality management services for pond and lake management. Field testing, clarity response, and nutrient control powered by The Water Raptor. We pair lab reports with amphibious harvesting and maintenance.",
  keywords: "pond and lake management, water quality management, pond water quality, lake water quality, clarity testing, aquatic ecosystem management, nutrient control, pond testing, lake testing, Water Raptor water quality",
  openGraph: {
    title: "Water Quality Management for Ponds & Lakes | WaterRaptor.com",
    description:
      "Comprehensive water quality management for pond and lake management. Harbor The Water Raptor for water quality testing, nutrient response, and harvesting that follows the science.",
    url: "https://waterraptor.com/water-quality-management",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/IMG_3564.webp",
        width: 1200,
        height: 630,
        alt: "Water quality management for ponds and lakes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Quality Management for Ponds & Lakes | WaterRaptor.com",
    description: "Comprehensive water quality management for pond and lake management.",
  },
};

const heroImages = [
  { src: "/images/IMG_3564.webp", alt: "Water quality sampling", label: "Sampling passes" },
  { src: "/images/IMG_3569.webp", alt: "Crew reviewing clarity data", label: "Clarity log" },
];

const highlights = [
  {
    title: "Field & lab testing",
    detail: "We collect samples, analyze nutrients, and pair every report with Water Raptor harvesting plans.",
  },
  {
    title: "Response-ready",
    detail: "Low dissolved oxygen, blue-green algae, or muck triggers immediate harvest or herbicide staging.",
  },
  {
    title: "Clarity tracking",
    detail: "Seasonal baselines let us prove improvements after every harvest and maintenance pass.",
  },
  {
    title: "Strategic follow-up",
    detail: "Testing guides dredging, herbicide, and aeration decisions so budgets stretch further.",
  },
];

export default function WaterQualityManagementPage() {
  return (
    <ServicePageLayout
      badge="Water Quality"
      title="Water quality management with The Water Raptor"
      summary="Pair field testing, chemistry, and amphibious harvesting so clarity stays high and budgets stay on track."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="waterQualityManagement"
      galleryTitle="Water quality field frames"
      galleryDescription="Images that capture testing, harvesting, and herbicide responses tied to clarity goals."
      mediaOffset={60}
      resourceLabel="Browse resource guides"
      resourceHref="/resources"
      contactNote="Share your water quality concerns and we will dispatch the amphibious crew to assess and respond."
      ctaLabel="Request water testing"
      ctaHref="#contact-form"
    />
  );
}
