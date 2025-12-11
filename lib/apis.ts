import { Product } from "./type";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export async function fetchProductsByCategory(
  category: string
): Promise<Product[]> {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return res.json();
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return res.json();
}

export async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}
