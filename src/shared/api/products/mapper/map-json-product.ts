import products from "@/../public/data/json/products.json";
import { Product } from "@shared/types/product";

type JsonProduct = typeof products[number];
export function mapJsonProduct(
    product: JsonProduct,
): Product {
    return {
        ...product,
         label: product.label as Product["label"],
    };
}