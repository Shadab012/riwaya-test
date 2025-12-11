import ProductDetail from "@/components/productDetails";
import { Params } from "@/lib/type";

export default async function Main({ params }: { params: Params }) {
  const { slug = "" } = await params;
  return (
    <>
      <ProductDetail slug={slug} />
    </>
  );
}
