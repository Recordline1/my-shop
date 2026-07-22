import { Product } from "../core/types/product";
import { ProductCsv } from "../core/types/product-csv";


export function exportProducts(products: Product[]): ProductCsv[] {
  return products.map((product) => ({
    name: product.name,
    slug: product.slug,
    description: product.description,

    image: product.image,

    price: product.price,
    old_price: product.old_price ?? "",

    sku: product.sku,

    brand: product.brand.id,
    category: product.category.id,

    label: product.label,

    stock: product.stock,
    inStock: product.inStock,

    colors: product.colors.join(","),
    materials: product.materials.join(","),

    size: product.size,
    weight: product.weight,
  }));
}