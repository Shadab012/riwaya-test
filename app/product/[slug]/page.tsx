import Head from "@/app/head";
import { fetchProduct } from "@/lib/apis";
import { Params, Product } from "@/lib/type";
import Image from "next/image";

export default async function ProductDetail({ params }: { params: Params }) {
  const { slug = "" } = await params;

  let product: Product | null = null;

  try {
    product = await fetchProduct(slug);
  } catch (err) {
    console.error("Failed to fetch product:", err);
  }

  if (!product) {
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
