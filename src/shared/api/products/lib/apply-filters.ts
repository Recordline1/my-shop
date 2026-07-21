import { Product } from "@shared/types/product";

import { GetProductsOptions } from "../types";

import { filterBySearch } from "./filter-by-search";
import { filterByCategory } from "./filter-by-category";
import { filterByBrand } from "./filter-by-brand";
import { filterByPrice } from "./filter-by-price";
import { filterByStock } from "./filter-by-stock";

export function applyFilters(
  products: Product[],
  options: GetProductsOptions = {},
) {
  let result = products;

  result = filterBySearch(result,options.search,);

  result = filterByCategory(result,options.category,);

  result = filterByBrand(result,options.brand,);

  result = filterByStock(result,options.inStock,);

  result = filterByPrice(result,
    options.minPrice,
    options.maxPrice,
  );

  return result;
}