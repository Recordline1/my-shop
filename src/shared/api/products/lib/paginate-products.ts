import { Product } from "@shared/types/product";

import { ProductsResponse } from "../types";

export function paginateProducts(
  products: Product[],
  page = 1,
  limit = 12,
): ProductsResponse {

  const total = products.length;

  const totalPages = Math.ceil(total / limit);

  const start = (page - 1) * limit;

  const end = start + limit;

  return {
    items: products.slice(start, end),

    total,

    page,

    limit,

    totalPages,

    hasNextPage: page < totalPages,

    hasPrevPage: page > 1,
  };
}