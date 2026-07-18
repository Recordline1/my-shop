import { getProducts } from "./get-products";

export async function getProduct(slug: string) {
  const products = await getProducts();

  return products.find(
    (product) => product.slug === slug,
  );
}