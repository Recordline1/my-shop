'use client'
import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  alt: string;
  badge?: React.ReactNode;
}

export const ProductGallery = ({ images, alt, badge }: ProductGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = images.length > 0 ? images : ["/placeholder-product.png"];
  const activeImage = gallery[activeIndex] ?? gallery[0];

  return (
    <div>
      <div className="relative h-96 rounded-md overflow-hidden bg-gray-50 mb-3">
        {badge}
        <Image
          src={activeImage}
          fill
          alt={alt}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {gallery.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {gallery.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveIndex(i)}
              className={`relative w-20 h-20 shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                i === activeIndex ? "border-amber-600" : "border-transparent"
              }`}
            >
              <Image src={img} fill alt={`${alt} ${i + 1}`} className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};