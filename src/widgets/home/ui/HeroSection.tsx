
import { getProducts } from "@shared/api/products/get-products";
import { getCategories } from "@shared/api/categories/get-categories";
import { HeroSlider } from "@widgets/home/ui/HeroSlider";
import { CategoryGrid } from "@widgets/home/ui/CategoryGrid";
import { ProductSection } from "@widgets/home/ui/ProductSection";
import { BrandMarquee } from "@widgets/home/ui/BrandMarquee";
import { getBrands } from "@shared/api/brands/get-brands";


export const HeroSection = async () => {
    const [newProducts, hitProducts, saleProducts, categories, brands] = await Promise.all([
        getProducts({ label: "new", limit: 5 }),
        getProducts({ label: "hit", limit: 5 }),
        getProducts({ label: "sale", limit: 5 }),
        getCategories(),
        getBrands(),
    ]);

    return (
        <section className=" pt-4 md:pt-8">
            <HeroSlider />
            <BrandMarquee brands={brands} />
            <CategoryGrid categories={categories} />
            <ProductSection title="Новинки" viewAllHref="/catalog?label=new" products={newProducts.items} />
            <ProductSection title="Хіти продажів" viewAllHref="/catalog?label=hit" products={hitProducts.items} />
            <ProductSection title="Знижки" viewAllHref="/catalog?label=sale" products={saleProducts.items} />
        </section>
    )
}