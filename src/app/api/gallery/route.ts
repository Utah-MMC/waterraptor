"use server";

import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { GalleryImage } from "@/lib/gallery";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp", ".avif"]);
const DEFAULT_LIMIT = 12;
const CACHE_TTL_MS = 60 * 1000;

const publicImagesDir = path.join(process.cwd(), "public", "images");

const sanitizeAlt = (name: string) =>
  name
    .replace(path.extname(name), "")
    .replace(/[_-]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();

let cachedImages: GalleryImage[] = [];
let cacheTimestamp = 0;

// Fisher-Yates shuffle algorithm for randomizing array
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const refreshCache = () => {
  const now = Date.now();
  if (now - cacheTimestamp < CACHE_TTL_MS && cachedImages.length > 0) {
    return;
  }

  try {
    const files = fs.readdirSync(publicImagesDir);
    const imageFiles = files
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .map((file) => ({
        name: file,
        url: `/images/${encodeURIComponent(file)}`,
        alt: sanitizeAlt(file),
      }));
    
    // Randomize the order so images appear from different jobs
    cachedImages = shuffleArray(imageFiles);
    cacheTimestamp = now;
  } catch (error) {
    console.error("Gallery cache refresh failed", error);
    cachedImages = [];
    cacheTimestamp = now;
  }
};

export async function GET(request: NextRequest) {
  refreshCache();

  const searchParams = request.nextUrl.searchParams;
  const offset = Math.max(0, Number(searchParams.get("offset") ?? "0"));
  const limit = Math.max(1, Number(searchParams.get("limit") ?? String(DEFAULT_LIMIT)));

  const paged = cachedImages.slice(offset, offset + limit);

  return NextResponse.json({
    images: paged,
    total: cachedImages.length,
    offset,
    limit,
  });
}
