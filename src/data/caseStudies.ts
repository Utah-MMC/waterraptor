export type CaseStudy = {
  title: string;
  summary: string;
  metrics: string;
  focus: string;
  href: string;
  image: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Utah reservoir milfoil harvest",
    summary:
      "The Water Raptor cleared three acres of dense milfoil and hauled the biomass to shore in a single 48-hour push.",
    metrics: "3 acres • 120 yards of biomass hauled • 2-day turnaround",
    focus: "Harvesting • Lake services",
    href: "/harvesting",
    image: "/images/IMG_3393.webp",
  },
  {
    title: "Canal debris and sediment run",
    summary:
      "A canal corridor saw debris removal and dredging before irrigation season, restoring flow without shutting water off.",
    metrics: "1.2 miles cleared • 4500 cu ft sediment removed",
    focus: "River & canal management • Dredge operations",
    href: "/river-canal-management",
    image: "/images/IMG_3674.webp",
  },
  {
    title: "Stormwater basin clarity reset",
    summary:
      "We staged herbicide and harvesting cycles around a stormwater pond, dropped phosphorus, and delivered a nutrient report.",
    metrics: "Phosphorus down 37% • 2 herbicide passes • 4 harvest decks",
    focus: "Aquatic herbicide • Water quality management",
    href: "/water-quality-management",
    image: "/images/IMG_3665.webp",
  },
];
