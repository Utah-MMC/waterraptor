import Image from "next/image";

export default function ModelViewerPlaceholder() {
  return (
    <div className="relative h-96 w-full">
      <Image
        src="/images/New Images/Truxor_Cutting-Collecting_10_web.jpg"
        alt="Professional equipment in action"
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="rounded-xl bg-black/60 px-3 py-1 text-xs text-white">
          Interactive 3D Model Coming Soon
        </div>
      </div>
    </div>
  );
}
