"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GalleryImage, GalleryResponse } from "@/lib/gallery";
import IntroGate from "@/components/IntroGate";
import {
  Check,
  Droplets,
  Leaf,
  MapPin,
  Phone,
  Radar,
  Scissors,
  Shield,
  Waves,
} from "lucide-react";
import BriefCTA from "@/components/BriefCTA";
import CaseStudySection from "@/components/CaseStudySection";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="h-96 w-full animate-pulse rounded-2xl bg-gradient-to-r from-slate-600 to-slate-800" />
  ),
});

const BRAND = {
  name: "The Water Raptor",
  tagline:
    "Professional pond and lake management services including harvesting, dredging, weed control, and water quality management for healthy aquatic ecosystems.",
  canonical: "https://waterraptor.com",
  heroImage: "/images/hero-pond-cleanup.jpg?v=1",
};

const STATS = [
  { value: "120+", label: "Harvesting deployments" },
  { value: "620 hrs", label: "Seasonal field hours" },
  { value: "25K+", label: "Square feet of aquatic weeds cleared weekly" },
];

const OPERATIONS = [
  {
    title: "Harvesting",
    description:
      "The Water Raptor lifts, cutters, rakes, and conveys dense aquatic vegetation directly to shore or barges.",
    href: "/harvesting",
  },
  {
    title: "Invasive Aquatic Plants",
    description:
      "Precision cutting of reeds, cattails, milfoil, and other invasives with low-impact hydraulics.",
    href: "/invasive-aquatic-plants",
  },
  {
    title: "Aquatic Herbicide",
    description:
      "Amphibious staging for herbicide crew access and chemistry transport without disturbing shoreline access.",
    href: "/aquatic-herbicide",
  },
  {
    title: "Dredge",
    description:
      "Sediment recovery and muck removal powered by dredge pumps and excavator arms for deeper ponds.",
    href: "/dredge-operations",
  },
  {
    title: "Aerial Herbicide Drone",
    description:
      "Launch drone passes from secure platforms to treat lake margins while crews operate under one command post.",
    href: "/aerial-herbicide-drone",
  },
  {
    title: "Pond & Lake Management",
    description:
      "Seasonal clarity monitoring, aeration support, and shoreline maintenance keep the water ready to harvest.",
    href: "/lake-management",
  },
  {
    title: "River & Canal Management",
    description:
      "Debris removal, weed trimming, and dredging keep channels moving without shutting down flow corridors.",
    href: "/river-canal-management",
  },
];

const SERVICE_SEQUENCE = [
  {
    title: "Launch amphibious harvests",
    detail: "Deploy The Water Raptor with harvest decks and conveyors to remove vegetation and floating blooms.",
    href: "/lake-services",
  },
  {
    title: "Document insights & plan",
    detail: "Share field data and resource stories so clients understand the next steps for clarity.",
    href: "/blog",
  },
  {
    title: "Schedule follow-up care",
    detail: "Book maintenance, dredging, or nutrient visits so each lake stays ready for recreation.",
    href: "/lake-management",
  },
];

const TOOL_FEATURES = [
  {
    label: "Amphibious mobility",
    value: "Tracks and pontoons",
    detail:
      "Transitions from shore to open water without cranes or barges, keeping projects on schedule.",
  },
  {
    label: "Harvest deck",
    value: "Conveyor & collection",
    detail:
      "Integrated conveyor collects biomass and feeds it into trailers or shoreline piles in a single pass.",
  },
  {
    label: "Hydraulic tooling",
    value: "Quick-change bracket",
    detail:
      "Swap cutters, diggers, skimmers, and grapples in minutes for precision harvesting and sediment work.",
  },
  {
    label: "Project intelligence",
    value: "Captured specs",
    detail:
      "Every deployment records location, plant types, and client goals so follow-up plans are fast and precise.",
  },
];

const IDENTITY_BULLETS = [
  "We keep one amphibious crew with The Water Raptor ready for harvests, herbicide staging, and dredging trips.",
  "Every deployment captures site data, material handled, and follow-up so clients know exactly what we clean and why.",
  "Regional focus means ponds, lakes, rivers, and canals all get the same machine, crew, and accountability in the field.",
];

export default function PondHarvestingPage() {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: BRAND.name,
      description: BRAND.tagline,
      url: BRAND.canonical,
      telephone: "+1-801-590-8516",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salt Lake City",
        addressRegion: "UT",
        addressCountry: "US",
      },
      serviceArea: [
        { "@type": "State", name: "Utah" },
        { "@type": "State", name: "Idaho" },
        { "@type": "State", name: "Wyoming" },
        { "@type": "State", name: "Arizona" },
      ],
    }),
    []
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [jsonLd]);

  const [galleryPreview, setGalleryPreview] = useState<GalleryImage[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/gallery?limit=${GALLERY_LIMIT}`)
      .then((res) => res.json())
      .then((data: GalleryResponse) => {
        if (!cancelled && Array.isArray(data.images)) {
          setGalleryPreview(data.images);
        }
      })
      .catch((error) => {
        console.error("Preview gallery load failed", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const heroImage = galleryPreview[0]?.url ?? BRAND.heroImage;

  return (
    <IntroGate>
    <div className="bg-transparent text-white">
      <section
        className="relative overflow-hidden bg-slate-900/60 backdrop-blur"
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(2,27,54,0.85), rgba(6,78,104,0.65)), url(${heroImage})`,
        }}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
          <Badge className="bg-slate-200 text-slate-900">waterraptor.com</Badge>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            {BRAND.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">
            {BRAND.tagline} The amphibious Water Raptor cuts, rakes, and conveys aquatic weeds, dredges muck,
            and supports herbicide or drone staging without waiting for barges or cranes. Every deployment highlights the machine and crew clearing ponds, lakes, rivers, and canals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="bg-emerald-500 text-white hover:bg-emerald-600" asChild>
              <Link href="/lake-services">Explore Services</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 bg-white/20 text-white hover:bg-white/30 hover:text-white" asChild>
              <a href="#operations">View Operations</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 bg-slate-900/70 text-white hover:bg-slate-800/90 hover:text-white" asChild>
              <a href="#contact-form">Schedule Deployment</a>
            </Button>
          </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-sm p-5 shadow-lg">
              <p className="text-3xl font-semibold text-emerald-200">{stat.value}</p>
              <p className="text-sm text-slate-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <BriefCTA />

      <section id="operations" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
            Amphibious equipment
          </p>
          <h2 className="text-3xl font-bold text-white">The Water Raptor at work</h2>
          <p className="mx-auto max-w-3xl text-slate-200">
            Our amphibious machine and crew focus on harvesting aquatic weeds, invasive plant removal,
            aquatic herbicide staging, dredging, aerial drone support, and pond, lake, river, and canal maintenance
            so every service gets the same priority and clarity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {OPERATIONS.map((operation, index) => {
            const operationBg =
              galleryPreview.length > 0
                ? galleryPreview[index % galleryPreview.length].url
                : undefined;
            return (
              <Card
                key={operation.title}
                className="relative overflow-hidden border-white/10 bg-slate-900/70"
              >
                {operationBg && (
                  <>
                    <Image
                      src={operationBg}
                      alt={`${operation.title} background`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-80"
                      loading="lazy"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
                  </>
                )}
                <div className="relative z-10 space-y-2 p-6">
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-xl font-semibold text-white">
                      {operation.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-slate-200">
                    <p>{operation.description}</p>
                    <Button variant="ghost" className="text-emerald-300 hover:text-white" asChild>
                      <Link href={operation.href ?? "/lake-services"}>Explore</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-4 text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Specialized services</p>
          <h2 className="text-3xl font-bold text-white">Targeted waterbody solutions</h2>
          <p className="text-slate-200 max-w-3xl mx-auto">
            Every specialized service pairs the Water Raptor with crews prepared for algae control, nutrient reduction, or habitat work.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Algae & aquatic weed control",
              desc: "Cutting, raking, and biomass collection for thick mats.",
              href: "/algae-weed-control",
            },
            {
              title: "Nutrient reduction",
              desc: "Dredging and muck removal to lower phosphorus.",
              href: "/nutrient-reduction",
            },
            {
              title: "Habitat & wetland restoration",
              desc: "Planting, shoreline work, and invasive intercept.",
              href: "/habitat-restoration",
            },
          ].map((service) => (
            <Card key={service.title} className="bg-slate-900/90 backdrop-blur-sm border border-white/20 transition hover:border-emerald-400">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-100 space-y-4">
                <p>{service.desc}</p>
                <Button variant="ghost" className="text-emerald-300 hover:text-white" asChild>
                  <Link href={service.href}>Learn more</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CaseStudySection />

      <section id="sequence" className="bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Service loop</p>
            <h2 className="text-3xl font-bold text-white">Harvest, resources, follow-up</h2>
            <p className="mx-auto max-w-3xl text-slate-200">
              The Water Raptor teams launch harvests, publish resource stories, and schedule the next maintenance or dredging visit.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_SEQUENCE.map((step) => (
              <Card key={step.title} className="border-white/10 bg-slate-900/80">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-slate-200">
                  <p>{step.detail}</p>
                  <Button variant="ghost" className="text-emerald-300 hover:text-white" asChild>
                    <Link href={step.href}>Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tool" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Card className="bg-slate-900/85 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">The Water Raptor</CardTitle>
              <p className="text-sm text-slate-200">
                Amphibious tool carrier built for pond harvesting, dredging, and area-wide vegetation control from shoreline to open water.
              </p>
            </CardHeader>
              <CardContent className="space-y-6 relative">
                <p className="text-sm text-slate-200">
                  Built on a hunter-style hull with tracks, The Water Raptor moves where others fear to tread. It handles conveyors, cutters, dredge pumps, and chemical staging while providing a comfortable deck for crew and clients.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {TOOL_FEATURES.map((feature, index) => {
                    const featureBg =
                      galleryPreview.length > 0
                        ? galleryPreview[(index + OPERATIONS.length) % galleryPreview.length].url
                        : undefined;
                    return (
                      <div
                        key={feature.label}
                        className="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-sm"
                      >
                        {featureBg && (
                          <>
                             <Image
                               src={featureBg}
                               alt={`${feature.label} background`}
                               fill
                               sizes="(max-width: 768px) 100vw, 40vw"
                               className="object-cover"
                               loading={index === 0 ? undefined : "lazy"}
                               quality={80}
                             />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent" />
                          </>
                        )}
                        <div className="relative z-10 space-y-2 p-4">
                          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                            {feature.label}
                          </p>
                          <p className="text-lg font-semibold text-white">{feature.value}</p>
                          <p className="text-xs text-slate-200">{feature.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          <Card className="bg-emerald-500/10 border-emerald-400/40">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">
                Harvest-ready dispatch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-200">
              <p>
                Our amphibious crew is for hire across the Intermountain West. Let us stage The Water Raptor for your next harvest, herbicide cycle, or dredge project.
              </p>
              <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-slate-100">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Contact
                </p>
                <p className="text-lg font-semibold">(801) 590-8516</p>
                <p className="text-xs text-slate-400">Available 7 days for emergency response</p>
              </div>
              <Button className="w-full bg-white text-slate-900" size="lg" asChild>
                <a href="#contact-form">
                  <Phone className="mr-2 h-4 w-4" />
                  Book a Harvest
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-900/90">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-white/5 p-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Regional crew</p>
              <h2 className="text-3xl font-bold">One crew, consistent service</h2>
              <p className="text-slate-300">
                The Water Raptor team moves across ponds, lakes, rivers, and canals with the same amphibious machine and operational playbook.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {IDENTITY_BULLETS.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-200">
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-slate-950/70">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Deployment portfolio</p>
            <h2 className="text-3xl font-bold">Field story gallery</h2>
            <p className="text-slate-300 mx-auto max-w-3xl">
              Explore deployments of The Water Raptor that highlight harvests, dredging, and herbicide support across ponds, lakes, rivers, and canals.
            </p>
          </div>
          <div className="mt-10">
            <ImageGallery />
          </div>
        </div>
      </section>

      <section id="contact-form" className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Schedule a deployment</p>
          <h2 className="text-3xl font-bold">Book The Water Raptor</h2>
          <p className="mx-auto max-w-3xl text-slate-300">
            Describe your pond or lake, select the services you want, and our team routes the opportunity straight to our harvest-ready crew. We respond within 24 hours.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
    </IntroGate>
  );
}

const GALLERY_LIMIT = 12;

function ImageGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPage = async (pageOffset: number, append: boolean) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/gallery?offset=${pageOffset}&limit=${GALLERY_LIMIT}`
      );
      if (!response.ok) {
        throw new Error("Unable to load gallery assets");
      }

      const data: GalleryResponse = await response.json();
      if (append) {
        setImages((prev) => [...prev, ...data.images]);
      } else {
        setImages(data.images);
      }
      setOffset(pageOffset + data.images.length);
      setTotal(data.total);
    } catch (fetchError) {
      console.error("Gallery load failed", fetchError);
      setError((fetchError as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (loading) return;
    loadPage(offset, true);
  };

  const resetGallery = () => {
    loadPage(0, false);
  };

  useEffect(() => {
    loadPage(0, false);
  }, []);

  const hasMore = images.length < total;

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={image.name}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 aspect-square"
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition duration-500 hover:scale-105"
              priority={index < 4}
              quality={index < 4 ? 90 : 75}
            />
          </div>
        ))}
      </div>

      {loading && (
        <p className="text-sm text-slate-400 text-center">Loading images...</p>
      )}
      {error && (
        <p className="text-sm text-red-400 text-center">
          {error}. Try refreshing or contact support.
        </p>
      )}

      {images.length > 0 && (
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 text-center">
          Showing {images.length} of {total} gallery highlights from recent deployments.
        </p>
      )}

      <div className="flex flex-col gap-2 items-center">
        {hasMore && (
          <Button
            variant="outline"
            size="lg"
            onClick={loadMore}
            disabled={loading}
            className="border-white/30 bg-white/20 text-white hover:bg-white/30 hover:text-white"
          >
            {loading ? "Loading..." : `Load ${Math.min(GALLERY_LIMIT, total - images.length)} more`}
          </Button>
        )}
        {!hasMore && images.length > GALLERY_LIMIT && (
          <Button 
            variant="outline" 
            size="lg" 
            onClick={resetGallery}
            className="border-white/30 bg-white/20 text-white hover:bg-white/30 hover:text-white"
          >
            Show fewer images
          </Button>
        )}
      </div>
    </div>
  );
}
