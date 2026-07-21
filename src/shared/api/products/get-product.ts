import { getProducts } from "./get-products";

export async function getProduct(slug: string) {
  const { items } = await getProducts({
    limit: Number.MAX_SAFE_INTEGER,
  });

  return items.find(
    product => product.slug === slug,
  );
}