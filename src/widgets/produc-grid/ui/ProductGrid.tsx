import { ProductCard } from '@entities/card/index'
import { AddToCartButton } from '@features/cart/ui/AddToCartButton'
import { Product } from '@shared/types/product'



export const  ProductGrid = async ({products}:{products:Product[]}) => {
   

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.sku} product={product} addItem={<AddToCartButton product={product} />} />
            ))}
        </div>
    )
}