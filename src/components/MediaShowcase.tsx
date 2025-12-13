"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GalleryImage, GalleryResponse } from "@/lib/gallery";

type MediaShowcaseProps = {
  offset: number;
  count: number;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function MediaShowcase({
  offset,
  count,
  title,
  description,
  ctaLabel,
  ctaHref,
}: MediaShowcaseProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`/api/gallery?offset=${offset}&limit=${count}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to load gallery assets");
        }
        return res.json() as Promise<GalleryResponse>;
      })
      .then((data) => {
        if (!cancelled) {
          setImages(data.images);
        }
      })
      .catch((fetchError) => {
        if (!cancelled) {
          setError((fetchError as Error).message);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [offset, count]);

  return (
    <section className="space-y-6">
      <div className="space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Media Showcase</p>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-sm text-slate-200 max-w-3xl mx-auto">{description}</p>
        {ctaLabel && ctaHref && (
          <div className="flex justify-center">
            <Button asChild variant="ghost">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-400 text-center">Media preview unavailable. Please refresh.</p>
      )}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div key={image.name} className="relative aspect-square overflow-hidden rounded-2xl border border-white/20">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 hover:scale-105"
              priority={index < 2}
              quality={index < 2 ? 90 : 75}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        ))}
        {loading &&
          Array.from({ length: count }).map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="aspect-square rounded-2xl bg-slate-800/70 animate-pulse"
            />
          ))}
      </div>
    </section>
  );
}
