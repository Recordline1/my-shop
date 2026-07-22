import { generateProduct } from "./generate-product";
import { brands } from "../core/data/brands";
import { PRODUCT_TYPES } from "../core/data/product-types";
import {Product} from "../core/types/product";
import {randomItem} from "../utils/random";
import { config } from "../config";

export function generateAllProducts() {
const allProducts: Product[] = [];
let index = 1;

while (allProducts.length < config.productsCount) {
  for (const productType of PRODUCT_TYPES) {
    if (allProducts.length >= config.productsCount) {
      break;
    }

    const brand = randomItem(brands);

    allProducts.push(
      generateProduct(productType, brand, index++)
    );
  }
}

return allProducts;
}