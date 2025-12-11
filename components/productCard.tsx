
import { Product } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link
            href={`/product/${product.id}`}
            className="border rounded-2xl p-4 hover:shadow-lg transition flex flex-col border-primary"
        >
            <Image
                src={product.image}
                alt={product.title}
                width={1000}
                height={1000}
                className="h-48 w-full object-contain mb-4"
                priority={true} 
            />
            <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{product.category}</p>
            <p className="font-bold border-primary" >
                ${product.price}
            </p>
        </Link>
    );
}