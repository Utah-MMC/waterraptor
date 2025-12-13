import { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Aerial Herbicide Drone | WaterRaptor.com",
  description:
    "Aerial herbicide drone missions backed by The Water Raptor amphibious staging center.",
  keywords: "aerial herbicide, herbicide drone, amphibious drone staging, Water Raptor herbicide drone, pond drone support",
  openGraph: {
    title: "Aerial Herbicide Drone | WaterRaptor.com",
    description:
      "Launch drone herbicide missions from The Water Raptor so shoreline and littoral zones stay targeted.",
    url: "https://waterraptor.com/aerial-herbicide-drone",
  },
};

const heroImages = [
  { src: "/images/IMG_3714.webp", alt: "Drone herbicide launch", label: "Drone launch" },
  { src: "/images/IMG_3715.webp", alt: "Drone flying over pond", label: "Drone patrol" },
];

const highlights = [
  {
    title: "Drone staging",
    detail: "The amphibious hull becomes a mobile launch pad for herbicide drones.",
  },
  {
    title: "Precision targeting",
    detail: "Drones reach shoreline edges and islands the machine cannot, while we monitor from the deck.",
  },
  {
    title: "Chemical handling",
    detail: "We keep tanks secure, mix rates, and document passes for compliance.",
  },
  {
    title: "Follow-up harvests",
    detail: "Harvest crews rinse the treated areas so toxins don’t linger.",
  },
];

export default function AerialHerbicideDronePage() {
  return (
    <ServicePageLayout
      badge="Drone Support"
      title="Aerial herbicide drone backed by The Water Raptor"
      summary="Use drones for precise herbicide while the amphibious platform manages tanks, crew, and safety."
      heroImages={heroImages}
      highlights={highlights}
      galleryKey="aerialHerbicideDrone"
      galleryTitle="Aerial herbicide support"
      galleryDescription="Drone launches, passes, and captures from the amphibious crew."
      mediaOffset={90}
      resourceLabel="Explore drone guides"
      resourceHref="/resources"
      contactNote="Share the shoreline or islands you need treated and we will plan the drone mission."
      ctaLabel="Stage a drone mission"
      ctaHref="#contact-form"
    />
  );
}
