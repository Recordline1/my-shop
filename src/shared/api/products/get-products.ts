import products from "@/../public/data/products.json";

import { Product } from "@shared/types/product";

import { GetProductsOptions } from "./types";

import { sortProducts } from "./lib/sort-products";

import { paginateProducts } from "./lib/paginate-products";

import { applyFilters } from "./lib/apply-filters";
import { ProductsResponse } from "../products/types";

export async function getProducts(
  options: GetProductsOptions = {},
): Promise<ProductsResponse> {

  let result = products as Product[];

  result = applyFilters(result, options);

  result = sortProducts(result,options.sort,);

  return paginateProducts(
    result,
    options.page,
    options.limit,
  );
}