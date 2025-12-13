import type { PortfolioImage } from "@/components/PortfolioGrid";

const makeEntry = (src: string, label: string): PortfolioImage => ({
  src: `/images/${src}`,
  alt: `${label} by The Water Raptor`,
  label,
});

export const serviceImages: Record<string, PortfolioImage[]> = {
  lakeServices: [
    makeEntry("IMG_3242.webp", "Shoreline harvest"),
    makeEntry("IMG_3243.webp", "Reed removal approach"),
    makeEntry("IMG_3244.webp", "Harvest deck in motion"),
    makeEntry("IMG_3252.webp", "Deployment footprint"),
  ],
  lakeManagement: [
    makeEntry("IMG_3254.webp", "Resource scouting"),
    makeEntry("IMG_3255.webp", "Stormwater readiness"),
    makeEntry("IMG_3257.webp", "Channel access"),
    makeEntry("IMG_3261.webp", "Evening clarity report"),
  ],
  lakeMaintenance: [
    makeEntry("IMG_3262.webp", "Prep at the dock"),
    makeEntry("IMG_3263.webp", "Crew briefings"),
    makeEntry("IMG_3265.webp", "Trailing conveyors"),
    makeEntry("IMG_3266.webp", "Field transport"),
  ],
  lakeDredging: [
    makeEntry("IMG_3268.webp", "Dredge pump staging"),
    makeEntry("IMG_3269.webp", "Deep muck recovery"),
    makeEntry("IMG_3270.webp", "Sediment survey"),
    makeEntry("IMG_3273.webp", "Shoreline restoration"),
  ],
  lakeCleanup: [
    makeEntry("IMG_3276.webp", "Floating debris removal"),
    makeEntry("IMG_3277.webp", "Harvested mats"),
    makeEntry("IMG_3279.webp", "Dock approach"),
    makeEntry("IMG_3280.webp", "Biomass staging"),
  ],
  lakeRestoration: [
    makeEntry("IMG_3281.webp", "Restoration access"),
    makeEntry("IMG_3282.webp", "Canal clean after"),
    makeEntry("IMG_3283.webp", "Shoreline repair"),
    makeEntry("IMG_3284.webp", "Fresh clarity"),
  ],
  lakeWeedControl: [
    makeEntry("IMG_3310.webp", "Algae blanket removal"),
    makeEntry("IMG_3311.webp", "Reed bed thinning"),
    makeEntry("IMG_3312.webp", "Biomass piles"),
    makeEntry("IMG_3314.webp", "Edge trimming"),
  ],
  waterManagement: [
    makeEntry("IMG_3317.webp", "Canal maintenance"),
    makeEntry("IMG_3319.webp", "River corridor sweep"),
    makeEntry("IMG_3341.webp", "Attachment patrol"),
    makeEntry("IMG_3342.webp", "Night operations"),
  ],
  waterQualityManagement: [
    makeEntry("IMG_3571.webp", "Clarity testing"),
    makeEntry("IMG_3572.webp", "Sampling launch"),
    makeEntry("IMG_3573.webp", "Oxygen readouts"),
    makeEntry("IMG_3577.webp", "Test kit staging"),
  ],
  utahLakeServices: [
    makeEntry("IMG_3343.webp", "Regional reservoir work"),
    makeEntry("IMG_3344.webp", "High-desert approach"),
    makeEntry("IMG_3345.webp", "Mountain inlet"),
    makeEntry("IMG_3346.webp", "Harvesting clarity"),
  ],
  harvesting: [
    makeEntry("IMG_3612.webp", "Wide harvest deck"),
    makeEntry("IMG_3613.webp", "Shoreline collection"),
    makeEntry("IMG_3614.webp", "Biomass stacking"),
    makeEntry("IMG_3619.webp", "Harvest pile"),
  ],
  invasiveAquaticPlants: [
    makeEntry("IMG_3620.webp", "Invasive reed bed"),
    makeEntry("IMG_3621.webp", "Cattail removal"),
    makeEntry("IMG_3629.webp", "Dense weed zone"),
    makeEntry("IMG_3630.webp", "Edge trimming"),
  ],
  aquaticHerbicide: [
    makeEntry("IMG_3643.webp", "Herbicide staging"),
    makeEntry("IMG_3644.webp", "Crew staging dock"),
    makeEntry("IMG_3647.webp", "Chemical deployment"),
    makeEntry("IMG_3648.webp", "Mixing and measuring"),
  ],
  dredgeOperations: [
    makeEntry("IMG_3649.webp", "Dredge pump in use"),
    makeEntry("IMG_3664.webp", "Muck removal"),
    makeEntry("IMG_3665.webp", "Depth gain"),
    makeEntry("IMG_3666.webp", "Fresh shoreline"),
  ],
  aerialHerbicideDrone: [
    makeEntry("IMG_3667.webp", "Drone launch pad"),
    makeEntry("IMG_3668.webp", "Drone with herbicide"),
    makeEntry("IMG_3671.webp", "Aerial spray"),
    makeEntry("IMG_3673.webp", "Crew coordinating drones"),
  ],
  riverCanalManagement: [
    makeEntry("IMG_3674.webp", "River management run"),
    makeEntry("IMG_3690.webp", "Canal debris cleanout"),
    makeEntry("IMG_3691.webp", "Flow corridor pass"),
    makeEntry("IMG_3693.webp", "Channel ready for irrigation"),
  ],
  truxorT50: [
    makeEntry("before-after-3.webp", "Before/after clarity"),
    makeEntry("before-after-4.webp", "Deep muck removal"),
    makeEntry("before-after-5.webp", "Trail before & after"),
    makeEntry("IMG_0064.webp", "Truxor in motion"),
  ],
};
