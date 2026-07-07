import { ProductCard } from '@entities/card/index'
import { getProducts } from '@widgets/produc-list/api/getProducts'
import { AddToCartButton } from '@features/cart/ui/AddToCartButton'



export const ProductList = async () => {
    const products = await getProducts()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products?.map((product: any) => (
                <ProductCard key={product.id} product={product} additem={<AddToCartButton product={product} />} />
            ))}
        </div>
    )
}