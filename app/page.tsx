import { fetchCategories, fetchProducts, fetchProductsByCategory } from "@/lib/apis";
import ProductGrid from "@/components/productGrid";
import Filters from "@/components/filters";
import Head from "./head";
import { HomePageProps } from "@/lib/type";

export default async function HomePage(props: { searchParams?: HomePageProps["searchParams"] }) {
  const searchParams = await props.searchParams || {};
  const category = searchParams.category || "";
  const maxPrice = Number(searchParams.price) || 2000;

  const products = category
    ? await fetchProductsByCategory(category)
    : await fetchProducts();

  const categories = await fetchCategories();
  const filteredProducts = products.filter((p) => p.price <= maxPrice);

  return (
    <>
      <Head title="Products - Product Store"
        description="Some suitable description"
        url="baseUrl" />
      <section className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 w-full">
          <Filters categories={categories} />
        </div>
        <div className="md:w-3/4 w-full">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </>
  );
}
