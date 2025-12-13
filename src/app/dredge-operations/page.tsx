import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Pond & Lake Dredging Services | WaterRaptor.com",
  description:
    "Professional dredge operations for comprehensive pond and lake management. The Water Raptor removes sediment, restores depth, and stages muck transport to maintain healthy aquatic ecosystems.",
  keywords: "pond and lake management, dredge operations, pond dredging, lake dredging, sediment removal, waterbody dredging, pond maintenance, lake maintenance, Water Raptor dredge, hydraulic dredging",
  openGraph: {
    title: "Pond & Lake Dredging Services | WaterRaptor.com",
    description:
      "Professional dredging services for pond and lake management. Thick muck, silt, and nutrient layers get removed with amphibious dredge pumps and conveyors.",
    url: "https://waterraptor.com/dredge-operations",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/IMG_3709.webp",
        width: 1200,
        height: 630,
        alt: "Dredge operations for ponds and lakes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pond & Lake Dredging Services | WaterRaptor.com",
    description: "Professional dredge operations for comprehensive pond and lake management.",
  },
};

const heroImages = [
  { src: "/images/IMG_3709.webp", alt: "Dredge pump flow", label: "Muck removal" },
  { src: "/images/IMG_3713.webp", alt: "Loaded sediment piles", label: "Sediment staging" },
];

const highlights = [
  {
    title: "Hydraulic dredging",
    detail: "High-capacity pumps and dredge arms remove nutrient-rich layers without barges.",
  },
  {
    title: "Depth restoration",
    detail: "We restore swimming depth while protecting shoreline and submerged infrastructure.",
  },
  {
    title: "Sediment transport",
    detail: "Conveyors and barges keep haul-off efficient, leaving clear water behind.",
  },
  {
    title: "Post-dredge clarity",
    detail: "Follow-up monitoring proves how much depth and clarity returned.",
  },
];

export default function DredgeOperationsPage() {
  return (
    <ServicePageLayout
      badge="Dredge Operations"
      title="Dredge operations guided by The Water Raptor"
      summary="The amphibious machine powers hydraulic dredging, hauling sediment, and restoring depth."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="dredgeOperations"
      galleryTitle="Dredge operations"
      galleryDescription="Muck removal and shore restoration logged by The Water Raptor crew."
      mediaOffset={84}
      resourceLabel="Explore dredge guides"
      resourceHref="/resources"
      contactNote="Outline the sediment depth and we will plan the amphibious dredge run."
      ctaLabel="Book a dredge"
      ctaHref="#contact-form"
    />
  );
}
