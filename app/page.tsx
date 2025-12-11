"use client";

import { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from "@/lib/apis";
import ProductGrid from "@/components/productGrid";
import Filters from "@/components/filters";
import Head from "./head";
import { Product } from "@/lib/type";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }

      try {
        const fetchedProducts = selectedCategory
          ? await fetchProductsByCategory(selectedCategory)
          : await fetchProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }

      setLoading(false);
    }

    fetchData();
  }, [selectedCategory]); // refetch when category changes

  const filteredProducts = products.filter((p) => p.price <= maxPrice);

  return (
    <>
      <Head
        title="Products - Product Store"
        description="Some suitable description"
        url="baseUrl"
      />
      <section className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 w-full">
          <Filters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        </div>
        <div className="md:w-3/4 w-full">
          <ProductGrid products={filteredProducts} loading={loading} />
        </div>
      </section>
    </>
  );
}
