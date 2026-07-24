import { getProducts } from '@shared/api/products/get-products'
import { GetProductsOptions } from '@shared/api/products/types'


export async function getCatalogData(
  options: GetProductsOptions,
) {
  return getProducts(options);
}