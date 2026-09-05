import Link from "next/link";
import { Product } from "@shared/types/product";
import { ProductCard } from "@entities/card/index";
import { AddToCartButton } from "@features/cart/ui/AddToCartButton";

interface ProductSectionProps {
    title: string;
    viewAllHref: string;
    products: Product[];
}

export const ProductSection = ({ title, viewAllHref, products }: ProductSectionProps) => {
    if (products.length === 0) return null;

    return (
        <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                <Link href={viewAllHref} className="text-amber-600 border border-amber-600 rounded-xl px-4 py-1 font-bold hover:bg-amber-600 hover:text-white transition-colors duration-300">
                    {`Всі ${title} →`}
                </Link>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="shrink-0 w-[240px] sm:w-[260px] snap-start"
                    >
                        <ProductCard product={product} addItem={<AddToCartButton product={product} />} />
                    </div>
                ))}
            </div>
        </section>
    );
};

