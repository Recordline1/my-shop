import fs from "node:fs";
import path from "node:path";
import PocketBase from "pocketbase";

const PB_URL = process.env.PB_URL || "https://pb.portfoliothe.pics";
const ADMIN_EMAIL = process.env.PB_ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.PB_ADMIN_PASSWORD;
const jsonPath = process.argv[2];
const publicDir = process.argv[3] || path.join(process.cwd(), "public");

if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error("Задай PB_ADMIN_EMAIL и PB_ADMIN_PASSWORD");
  process.exit(1);
}
if (!jsonPath) {
  console.error("Использование: node import-to-pocketbase.mjs products.json [publicDir]");
  process.exit(1);
}

const pb = new PocketBase(PB_URL);

function toColorsArray(colors) {
  if (Array.isArray(colors)) return colors;
  if (typeof colors === "string") return colors.split(",").map((c) => c.trim()).filter(Boolean);
  return [];
}

async function main() {
  await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASSWORD);
  console.log("-> Авторизован");

  const items = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  console.log(`-> Товаров к импорту: ${items.length}`);

  let created = 0;
  let failed = 0;

  for (const item of items) {
    try {
      const formData = new FormData();

      formData.append("name", item.name);
      formData.append("slug", item.slug);
      formData.append("description", item.description);
      formData.append("price", String(item.price));
      if (item.old_price) formData.append("old_price", String(item.old_price));
      formData.append("sku", item.sku);

    
      const brandId = typeof item.brand === "string" ? item.brand : item.brand?.id;
      const categoryId = typeof item.category === "string" ? item.category : item.category?.id;
      if (brandId) formData.append("brand", brandId);
      if (categoryId) formData.append("category", categoryId);

      if (item.label) formData.append("label", item.label);

      formData.append("stock", String(item.stock));
      formData.append("inStock", String(item.inStock));
      formData.append("size", item.size);
      formData.append("weight", String(item.weight));

      formData.append("colors", JSON.stringify(toColorsArray(item.colors)));
      formData.append(
        "materials",
        JSON.stringify(Array.isArray(item.materials) ? item.materials : toColorsArray(item.materials))
      );

      if (item.image) {
        const coverPath = path.join(publicDir, item.image);
        if (fs.existsSync(coverPath)) {
          formData.append("image", new Blob([fs.readFileSync(coverPath)]), path.basename(coverPath));
        } else {
          console.warn(`   [warn] нет файла обложки: ${coverPath}`);
        }
      }

      const galleryPaths = Array.isArray(item.images) ? item.images : [];
      for (const imgRelPath of galleryPaths) {
        const abs = path.join(publicDir, imgRelPath);
        if (fs.existsSync(abs)) {
          formData.append("images", new Blob([fs.readFileSync(abs)]), path.basename(abs));
        } else {
          console.warn(`   [warn] нет файла галереи: ${abs}`);
        }
      }

      const record = await pb.collection("products").create(formData);
      console.log(`   [create] ${item.name} -> ${record.id}`);
      created++;
    } catch (err) {
      console.error(`   [error] ${item.name}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nГотово. Создано: ${created}, ошибок: ${failed}.`);
}

main().catch(console.error);