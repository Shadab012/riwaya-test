"use client";

import { FilterProps } from "@/lib/type";

export default function Filters({
  categories,
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
}: FilterProps) {
  return (
    <div className="flex flex-col gap-6 p-4 border border-primary rounded-md bg-white shadow-sm">
      <div className="flex flex-col flex-wrap gap-2">
        <span className="font-medium text-gray-700 mb-1 w-full">Category</span>
        <button
          onClick={() => setSelectedCategory("")}
          className={`px-4 py-2 rounded-full border text-sm font-medium cursor-pointer ${
            selectedCategory === ""
              ? "bg-primary text-white border-primary"
              : "bg-white text-gray-700 border-gray-300 hover:bg-primary/10"
          } transition`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            className={`px-4 py-2 rounded-full border text-sm font-medium cursor-pointer ${
              selectedCategory === c
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
          Max Price: ${maxPrice}
        </label>
        <input
          type="range"
          min={0}
          max={2000}
          step={10}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
      </div>
    </div>
  );
}
