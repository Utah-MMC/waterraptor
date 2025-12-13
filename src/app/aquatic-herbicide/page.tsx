import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Aquatic Herbicide | WaterRaptor.com",
  description:
    "Professional aquatic herbicide staging services using The Water Raptor amphibious machine. Secure amphibious access for chemistry delivery, precise application support, and comprehensive compliance reports. Safe staging with hydraulic lifts and minimal shoreline disturbance for effective weed control.",
  keywords: "aquatic herbicide, herbicide staging, Water Raptor herbicide, chemical application support, pond herbicide",
  openGraph: {
    title: "Aquatic Herbicide | WaterRaptor.com",
    description:
      "Professional aquatic herbicide staging services using The Water Raptor. Secure amphibious access, chemistry delivery, and compliance reports.",
    url: "https://waterraptor.com/aquatic-herbicide",
    type: "website",
    images: [
      {
        url: "https://waterraptor.com/images/IMG_3701.webp",
        width: 1200,
        height: 630,
        alt: "Aquatic herbicide staging services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquatic Herbicide | WaterRaptor.com",
    description: "Professional aquatic herbicide staging services using The Water Raptor.",
  },
};

const heroImages = [
  { src: "/images/IMG_3701.webp", alt: "Herbicide staging", label: "Herbicide staging" },
  { src: "/images/IMG_3702.webp", alt: "Crew prepping chemistry", label: "Chemical prep" },
];

const highlights = [
  {
    title: "Safe staging",
    detail: "Hydraulic lifts carry herbicide tanks and pumps from shore to open water with minimal disturbance.",
  },
  {
    title: "Compliance ready",
    detail: "We document treated areas, concentrations, and flow to support compliance with local agencies.",
  },
  {
    title: "Chemical delivery",
    detail: "The amphibious platform transports hoses, tanks, and crew so herbicide teams can focus on accuracy.",
  },
  {
    title: "Follow-up harvests",
    detail: "Once treatments settle, we harvest the dying mats so nutrients don’t return to the water column.",
  },
];

export default function AquaticHerbicidePage() {
  return (
    <ServicePageLayout
      badge="Aquatic Herbicide"
      title="Aquatic herbicide staging & harvest"
      summary="The Water Raptor keeps herbicide crews mobile, compliant, and ready to harvest treated vegetation."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="aquaticHerbicide"
      galleryTitle="Aquatic herbicide staging"
      galleryDescription="Imagery from amphibious herbicide support and follow-up harvesting."
      mediaOffset={78}
      resourceLabel="Explore herbicide guides"
      resourceHref="/resources"
      contactNote="Share your treatment goals and we will coordinate the amphibious staging and harvesting."
      ctaLabel="Coordinate herbicide"
      ctaHref="#contact-form"
    />
  );
}
