"use client";

import { FilterProps } from "@/lib/type";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Filters({ categories }: FilterProps) {
  const router = useRouter();
  const params = useSearchParams();

  const currentCategory = params.get("category") || "";
  const currentPrice = params.get("price") || "2000";

  const [price, setPrice] = useState(currentPrice);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());

    if (value === "" || (key === "price" && value === "2000")) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }

    router.push(`/?${newParams.toString()}`);
  };


  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      updateFilter("price", price);
    }, 300);
  }, [price]);

  return (
    <div className="flex flex-col gap-6 p-4 border border-primary rounded-md bg-white shadow-sm">
      
      <div className="flex flex-col flex-wrap gap-2">
        <span className="font-medium text-gray-700 mb-1 w-full">Category</span>
        <button
          onClick={() => updateFilter("category", "")}
          className={`px-4 py-2 rounded-full border text-sm font-medium cursor-pointer ${
            currentCategory === "" 
              ? "bg-primary text-white border-primary" 
              : "bg-white text-gray-700 border-gray-300 hover:bg-primary/10"
          } transition`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => updateFilter("category", c)}
            className={`px-4 py-2 rounded-full border text-sm font-medium cursor-pointer ${
              currentCategory === c
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-300 hover:bg-primary/10"
            } transition`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-gray-700 mb-4">
          Max Price: ${price}
        </label>
        <input
          type="range"
          min={0}
          max={2000}
          step={10}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
      </div>
    </div>
  );
}
