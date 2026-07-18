import { generateProduct } from "./generate-product";
import { brands } from "../shared/data/brands";
import { PRODUCT_TYPES } from "../shared/config/product-types";
import {Product} from "../shared/types/product";
import {randomItem} from "../shared/random";
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