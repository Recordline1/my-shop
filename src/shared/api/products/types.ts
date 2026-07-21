import { Product } from "@shared/types/product";


export type ProductSort =
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc"
  | "newest";

export interface GetProductsOptions {
  category?: string;
  brand?: string;

  colors?: string[];
  materials?: string[];

  minPrice?: number;
  maxPrice?: number;

  inStock?: boolean;

  search?: string;

  sort?: ProductSort;

  page?: number;
  limit?: number;
}


export interface ProductsResponse {
  items: Product[];

  total: number;

  page: number;

  limit: number;

  totalPages: number;

  hasNextPage: boolean;

  hasPrevPage: boolean;
}