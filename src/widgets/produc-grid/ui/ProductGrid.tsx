import { ProductCard } from '@entities/card/index'
import { AddToCartButton } from '@features/cart/ui/AddToCartButton'
import { Product } from '@shared/types/product'



export const ProductGrid = ({ products }: { products: Product[] }) => {
    if (products.length === 0) {
        return (
            <div className="w-full min-w-0 flex flex-col items-center justify-center py-20 text-center">
                <p className="text-lg font-medium text-gray-900">Нічого не знайдено</p>
                <p className="mt-2 text-sm text-gray-500">
                    Спробуйте змінити параметри фільтра або скинути їх
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-6">
    {products.map((product) => (
        <ProductCard key={product.sku} product={product} addItem={<AddToCartButton product={product} />} />
    ))}
</div>
    )
}