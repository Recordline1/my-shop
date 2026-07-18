import { getProducts } from "./get-products";

export async function getProductsByBrand(brandId: string) {
  const products = await getProducts();

  return products.filter(
    (product) => product.brand.id === brandId,
  );
}