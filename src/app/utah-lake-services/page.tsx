import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Utah Lake Services | WaterRaptor.com",
  description:
    "Utah-focused lake services using The Water Raptor to harvest aquatic weeds, dredge, and manage reservoirs.",
  keywords: "Utah lake services, pond management Utah, amphibious harvesting Utah, Water Raptor Utah, lake cleanup",
  openGraph: {
    title: "Utah Lake Services | WaterRaptor.com",
    description:
      "Regional Utah lake services that deploy The Water Raptor for vegetation control, dredging, and water clarity.",
    url: "https://waterraptor.com/utah-lake-services",
  },
};

const heroImages = [
  { src: "/images/IMG_3560.webp", alt: "Utah reservoir harvest", label: "Regional harvest" },
  { src: "/images/IMG_3561.webp", alt: "High desert shoreline", label: "Desert shores" },
];

const highlights = [
  {
    title: "Utah-focused crew",
    detail: "We mobilize across the Wasatch Front with the same amphibious machine and satellite logistics.",
  },
  {
    title: "Rapid response",
    detail: "Seasonal blooms or community events trigger quick deployments of the Water Raptor.",
  },
  {
    title: "Infrastructure safe",
    detail: "Our crawlers protect docks, aeration, and shoreline materials while cleaning the water.",
  },
  {
    title: "Complete service loop",
    detail: "From harvest to reports to follow-up maintenance, every Utah job stays within the same crew.",
  },
];

export default function UtahLakeServicesPage() {
  return (
    <ServicePageLayout
      badge="Utah Lake Services"
      title="Utah lake services that follow The Water Raptor"
      summary="Regional crews use the amphibious machine for harvests, dredging, and maintenance across Utah lakes and canals."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="utahLakeServices"
      galleryTitle="Utah deployments"
      galleryDescription="Imagery from Utah harvests, dredging runs, and maintenance missions."
      mediaOffset={48}
      resourceLabel="Browse resource guides"
      resourceHref="/resources"
      contactNote="Tell us where in Utah you need The Water Raptor and we will stage a deployment."
      ctaLabel="Secure Utah support"
      ctaHref="#contact-form"
    />
  );
}
