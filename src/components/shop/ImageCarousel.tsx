"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function ImageCarousel({ images }: { images: string[] }) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div
      className="overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex-none w-full aspect-square"
          >
            <Image
              src={src}
              alt={`画像${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
