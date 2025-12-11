"use client";

import Head from "@/app/head";
import { fetchProduct } from "@/lib/apis";
import { Product } from "@/lib/type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductDetail({ slug }: { slug: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedProduct = await fetchProduct(slug);
        setProduct(fetchedProduct);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <section className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-10">
        <div className="animate-pulse  h-96 w-full md:w-1/2 bg-gray-200 rounded-lg" />
        <div className="space-y-4 w-full md:w-1/2">
          <div className="h-8 w-3/4 bg-gray-200 rounded" />
          <div className="h-6 w-1/4 bg-gray-200 rounded" />
          <div className="h-6 w-full bg-gray-200 rounded" />
          <div className="h-6 w-full bg-gray-200 rounded" />
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-primary">
          Product not found
        </h1>
        <p>Please check the URL or try again later.</p>
      </section>
    );
  }

  return (
    <>
      <Head
        title={product.title}
        description={product.description}
        url="baseUrl"
      />
      <section className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={384}
          className="object-contain h-96"
          priority
        />
        <div>
          <h1 className="text-3xl font-bold mb-4 text-primary">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-xl font-bold mb-6 text-primary">
            ${product.price}
          </p>
          <p>{product.description}</p>
        </div>
      </section>
    </>
  );
}
