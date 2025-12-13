import { GalleryImage } from '@/lib/gallery';

let cachedGalleryList: GalleryImage[] | null = null;
let inFlightGalleryList: Promise<GalleryImage[]> | null = null;

export function shuffleArray<T>(array: readonly T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function getGalleryList(): Promise<GalleryImage[]> {
  if (cachedGalleryList) return cachedGalleryList;

  if (!inFlightGalleryList) {
    inFlightGalleryList = fetch('/gallery-list.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Unable to load gallery assets');
        }
        return res.json() as Promise<unknown>;
      })
      .then((data) => {
        if (!Array.isArray(data)) return [];
        return data.filter((item): item is GalleryImage => {
          if (!item || typeof item !== 'object') return false;
          const record = item as Record<string, unknown>;
          return (
            typeof record.name === 'string' &&
            typeof record.url === 'string' &&
            typeof record.alt === 'string'
          );
        });
      })
      .then((list) => {
        cachedGalleryList = list;
        inFlightGalleryList = null;
        return list;
      })
      .catch((error) => {
        inFlightGalleryList = null;
        throw error;
      });
  }

  return inFlightGalleryList;
}

