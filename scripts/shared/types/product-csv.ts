export interface ProductCsv {
  name: string;
  slug: string;
  description: string;

  image?: string;

  price: number;
  old_price: number | "";

  sku: string;

  category: string;  // PocketBase relation id
  brand: string;  // PocketBase relation id

  label: string;

  stock: number;
  inStock: boolean;

  colors: string;
  materials: string;

  size: string;

  weight: number;
}