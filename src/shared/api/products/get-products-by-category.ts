import { getProducts } from "./get-products";

export async function getProductsByCategory(categoryId: string) {
  const products = await getProducts();

  return products.filter(
    (product) => product.category.id === categoryId,
  );
}