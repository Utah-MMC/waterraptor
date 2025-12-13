import { NextRequest, NextResponse } from "next/server";
import { GalleryImage } from "@/lib/gallery";
import fs from "fs";
import path from "path";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const DEFAULT_LIMIT = 12;
const CACHE_TTL_MS = 60 * 1000;

// Fisher-Yates shuffle algorithm for randomizing array
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

let cachedImages: GalleryImage[] = [];
let cacheTimestamp = 0;

const loadGalleryList = (): GalleryImage[] => {
  try {
    // Read the pre-generated JSON file instead of scanning directory
    const galleryListPath = path.join(process.cwd(), "public", "gallery-list.json");
    const fileContent = fs.readFileSync(galleryListPath, "utf-8");
    const images: GalleryImage[] = JSON.parse(fileContent);
    return images;
  } catch (error) {
    console.error("Failed to load gallery list", error);
    return [];
  }
};

const refreshCache = () => {
  const now = Date.now();
  if (now - cacheTimestamp < CACHE_TTL_MS && cachedImages.length > 0) {
    return;
  }

  try {
    const images = loadGalleryList();
    // Randomize the order so images appear from different jobs
    cachedImages = shuffleArray(images);
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
