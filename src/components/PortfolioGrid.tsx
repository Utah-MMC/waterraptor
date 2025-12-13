import Image from "next/image";

export type PortfolioImage = {
  src: string;
  alt: string;
  caption?: string;
  label?: string;
};

type PortfolioGridProps = {
  title: string;
  description: string;
  images: PortfolioImage[];
};

export function PortfolioGrid({ title, description, images }: PortfolioGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="space-y-2 text-center mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Field gallery</p>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition duration-500 hover:scale-105"
              loading="lazy"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            {image.caption && (
              <div className="absolute left-3 bottom-3 text-[10px] text-slate-200">{image.caption}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
