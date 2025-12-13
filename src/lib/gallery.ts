export type GalleryImage = {
  name: string;
  url: string;
  alt: string;
};

export type GalleryResponse = {
  images: GalleryImage[];
  total: number;
  offset: number;
  limit: number;
};
