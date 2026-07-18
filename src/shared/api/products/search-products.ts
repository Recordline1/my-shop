import { getProducts } from "./get-products";

export async function searchProducts(query: string) {
  const products = await getProducts();

  const search = query.toLowerCase();

  return products.filter((product) =>
    product.name.toLowerCase().includes(search),
  );
}