import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

import { brands } from "../shared/data/brands";
import { categories } from "../shared/data/categories";

import { generateAllProducts } from "../generate/generate-products";

import { writeJson } from "../utils/write-json";

export async function generateJson() {
  const outputDir = resolve("public/data");

  await mkdir(outputDir, { recursive: true });

  const products = generateAllProducts();

  await writeJson(
    resolve(outputDir, "products.json"),
    products,
  );

  await writeJson(
    resolve(outputDir, "brands.json"),
    brands,
  );

  await writeJson(
    resolve(outputDir, "categories.json"),
    categories,
  );


  console.log("✅ Json files generated successfully!");
}