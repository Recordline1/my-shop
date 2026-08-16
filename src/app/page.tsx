import { getProducts } from "@shared/api/products/get-products";
import { getCategories } from "@shared/api/categories/get-categories";
import { HeroBannerSection } from "@widgets/home/ui/HeroBannerSection";
import { CategoryGrid } from "@widgets/home/ui/CategoryGrid";
import { ProductSection } from "@widgets/home/ui/ProductSection";

export default async function HomePage() {
  const [newProducts, hitProducts, saleProducts, categories] = await Promise.all([
    getProducts({ label: "new", limit: 5 }),
    getProducts({ label: "hit", limit: 5 }),
    getProducts({ label: "sale", limit: 5 }),
    getCategories(),
  ]);

  return (
    <main className="max-w-6xl mx-auto p-8">
      <HeroBannerSection />
      <CategoryGrid categories={categories} />
      <ProductSection title="Новинки" viewAllHref="/catalog?label=new" products={newProducts.items} />
      <ProductSection title="Хіти продажів" viewAllHref="/catalog?label=hit" products={hitProducts.items} />
      <ProductSection title="Знижки" viewAllHref="/catalog?label=sale" products={saleProducts.items} />
    </main>
  );
}