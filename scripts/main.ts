import { generateCsv } from "./export/generate-csv";
import{ generateJson } from "./export/generate-json";

async function main() {
  console.log("Starting data generation...");

  await generateCsv();

  await generateJson();
}

main().catch(console.error);

