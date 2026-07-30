import { GetProductsOptions } from "./types";
import { isProductSort } from "@shared/api/products/lib/is-product-sort";
import { parseNumber } from "@shared/api/products/lib/parse-number";
import { SearchParams } from "@shared/api/products/types";
import { getString } from "@shared/api/products/lib/get-string";






export function parseProductsQuery(
  searchParams: SearchParams,
): GetProductsOptions {
  const page =
    typeof searchParams.page === "string"
      ? Number(searchParams.page)
      : 1;

  const search = getString(searchParams.search)
  const brand = getString(searchParams.brand)
  const category = getString(searchParams.category)
  const minPrice = getString(searchParams.minPrice)
  const maxPrice = getString(searchParams.maxPrice)
  const inStock = getString(searchParams.inStock)

  return {
    page: Number.isNaN(page) || page < 1 ? 1 : page,
    sort: isProductSort(searchParams.sort) ? searchParams.sort : undefined,
    search: search?.trim() || undefined,
    category: category?.trim() || undefined,
    brand: brand?.trim() || undefined,
    minPrice: parseNumber(minPrice),
    maxPrice: parseNumber(maxPrice),
    inStock: inStock === "true" ? true :
      inStock === "false" ? false : undefined,
  };
}