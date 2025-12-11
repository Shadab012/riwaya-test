export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface HomePageProps {
  searchParams?: {
    category?: string;
    price?: string;
  };
}
export interface MetaProps {
  title: string;
  description: string;
  url?: string;
}

export type Params = Promise<{
  slug?: string;
  lang?: string | undefined;
  page?: string | undefined;
}>;

export interface FilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
}

export interface ProductGridProps {
  products: Product[];
}
