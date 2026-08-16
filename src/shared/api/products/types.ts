import { Product } from "@shared/types/product";


export const PRODUCT_SORT = {
  POPULAR: "popular",

  NEWEST: "newest",

  PRICE_ASC: "price-asc",

  PRICE_DESC: "price-desc",

  NAME_ASC: "name-asc",

  NAME_DESC: "name-desc",
} as const;

export type ProductSort =
  typeof PRODUCT_SORT[keyof typeof PRODUCT_SORT];

export interface GetProductsOptions {
  category?: string;
  brand?: string;

  colors?: string[];
  materials?: string[];
  sizes?: string[];

  minPrice?: number;
  maxPrice?: number;

  inStock?: boolean;

  search?: string;

  label?: string;

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

export interface ProductsQuery {
  search?: string;

  category?: string;

  brand?: string;

  minPrice?: number;

  maxPrice?: number;

  inStock?: boolean;

  sort?: ProductSort;

  page?: number;

  limit?: number;
}

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}

