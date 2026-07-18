import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

import { brands } from "../shared/data/brands";
import { categories } from "../shared/data/categories";

import { generateAllProducts } from "../generate/generate-products";

import { exportBrands } from "./export-brands";
import { exportCategories } from "./export-categories";
import { exportProducts } from "./export-products";

import { writeCsv } from "../utils/write-csv";
import { writeJson } from "../utils/write-json";

export async function generateCsv() {
  const outputDir = resolve("generated");
  const outputDirJison = resolve("public/data");

  await mkdir(outputDir, { recursive: true });
  await mkdir(outputDirJison, { recursive: true });

  const products = generateAllProducts();

  await writeCsv(
    resolve(outputDir, "brands.csv"),
    exportBrands(brands)
  );

  await writeCsv(
    resolve(outputDir, "categories.csv"),
    exportCategories(categories)
  );

  await writeCsv(
    resolve(outputDir, "products.csv"),
    exportProducts(products)
  );

  await writeJson(
    resolve(outputDirJison, "products.json"),
    products,
  );


  console.log("✅ CSV files generated successfully!");
}