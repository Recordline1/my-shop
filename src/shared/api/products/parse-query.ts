import { GetProductsOptions } from "./types";
import { ProductSort } from "@shared/api/products/types";
import { isProductSort } from "@shared/api/products/lib/is-product-sort";


interface SearchParams {
  page?: string;
  sort?: ProductSort;
  search?: string;
}



export function parseProductsQuery(
  searchParams: SearchParams,
): GetProductsOptions {
  const page =
    typeof searchParams.page === "string"
      ? Number(searchParams.page)
      : 1;
  return {
    page: Number.isNaN(page) || page < 1 ? 1 : page,
    sort: isProductSort(searchParams.sort) ? searchParams.sort : undefined,
    search: searchParams.search?.trim() || undefined,
  };
}