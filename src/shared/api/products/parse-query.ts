import {GetProductsOptions} from "./types";
import {ProductSort} from "@shared/api/products/types";


interface SearchParams {
  page?: string;
  sort?: ProductSort;
}



export function parseProductsQuery(
  searchParams: SearchParams,
): GetProductsOptions {
  return {
    page: searchParams.page ? Number(searchParams.page) : 1,
    sort: searchParams.sort,
  };
}