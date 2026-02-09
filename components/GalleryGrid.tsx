"use client";

import { useMemo, useState } from "react";
import { cn } from "../lib/utils";

const filters = ["All", "Outdoor Kitchens", "Grills", "Backyard Setups", "Stainless Components"];

const images = Array.from({ length: 30 }, (_, index) => {
  const categories = [
    "Outdoor Kitchens",
    "Grills",
    "Backyard Setups",
    "Stainless Components"
  ];
  return {
    id: index + 1,
    category: categories[index % categories.length],
    src: `https://images.unsplash.com/collection/483251/${index + 1}00?auto=format&fit=crop&w=800&q=80`,
    caption: `Showroom install ${index + 1}`
  };
});

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImage, setActiveImage] = useState<(typeof images)[number] | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return images;
    return images.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={cn(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em]",
              activeFilter === filter
                ? "border-ember bg-ember text-charcoal"
                : "border-white/10 text-steel hover:border-ember hover:text-ember"
            )}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filteredImages.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveImage(image)}
            className="mb-4 w-full overflow-hidden rounded-3xl border border-white/10 bg-ash text-left"
          >
            <img src={image.src} alt={image.caption} className="h-64 w-full object-cover" loading="lazy" />
            <div className="p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-steel">{image.category}</p>
              <p className="mt-2 text-sm text-sand">{image.caption}</p>
            </div>
          </button>
        ))}
      </div>
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-3xl rounded-3xl border border-white/10 bg-ash p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-steel">{activeImage.category}</p>
                <h3 className="heading-md mt-2">{activeImage.caption}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-steel"
              >
                Close
              </button>
            </div>
            <img
              src={activeImage.src}
              alt={activeImage.caption}
              className="mt-6 h-[420px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
