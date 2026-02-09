"use client";

import { useMemo, useState } from "react";
import { cn } from "../lib/utils";

const filters = [
  "Built-in Grills",
  "Freestanding Grills",
  "Kamado / Smokers",
  "Outdoor Refrigeration & Coolers",
  "Pizza Ovens",
  "Accessories",
  "Wüsthof Knives"
];

const products = [
  {
    name: "Summit Built-In Series",
    category: "Built-in Grills",
    description: "Flush-fit stainless grilling with multi-zone heat control."
  },
  {
    name: "Estate Freestanding Grill",
    category: "Freestanding Grills",
    description: "Luxury cart grill with heavy-duty lid and lighting."
  },
  {
    name: "Heritage Kamado",
    category: "Kamado / Smokers",
    description: "Ceramic smoker for slow cooking, smoke, and searing."
  },
  {
    name: "Coldfront Beverage Center",
    category: "Outdoor Refrigeration & Coolers",
    description: "Outdoor-rated cooler with quick-access storage."
  },
  {
    name: "Fuego Stone Pizza Oven",
    category: "Pizza Ovens",
    description: "Artisan-style pizza and flatbreads in minutes."
  },
  {
    name: "Precision Grill Kit",
    category: "Accessories",
    description: "Thermometers, smoke boxes, rib racks, and tools."
  },
  {
    name: "Wüsthof Forged Steel Set",
    category: "Wüsthof Knives",
    description: "Premium forged steel knives for outdoor prep."
  }
];

export default function ProductFilters() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") {
      return products;
    }
    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {["All", ...filters].map((filter) => (
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
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProducts.map((product) => (
          <div key={product.name} className="glass-card">
            <p className="text-xs uppercase tracking-[0.2em] text-steel">{product.category}</p>
            <h3 className="heading-md mt-3 text-sand">{product.name}</h3>
            <p className="mt-3 text-sm text-steel">{product.description}</p>
            <div className="mt-6">
              <a className="btn-outline" href="/showroom">
                See it in our showroom
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
