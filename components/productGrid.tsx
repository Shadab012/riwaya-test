import { ProductGridProps } from "@/lib/type";
import ProductCard from "./productCard";

function ProductCardSkeleton() {
  return (
    <div className="border rounded-2xl h-[354px] p-4 flex flex-col animate-pulse border-primary">
      <div className="h-48 w-full bg-gray-200 mb-4 rounded-lg" />
      <div className="h-6 w-3/4 bg-gray-200 mb-2 rounded" />
      <div className="h-4 w-1/2 bg-gray-200 mb-1 rounded" />
      <div className="h-5 w-1/4 bg-gray-200 rounded" />
    </div>
  );
}

export default function ProductGrid({
  products,
  loading,
}: ProductGridProps & { loading?: boolean }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
