import { ProductCard } from '@entities/card/index'
// import { getProducts } from '@widgets/produc-list/api/getProducts'
import {getProducts} from '@shared/api/products/get-products'
import { AddToCartButton } from '@features/cart/ui/AddToCartButton'



export const ProductList = async () => {
    const products = await getProducts()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.items?.map((product) => (
                <ProductCard key={product.sku} product={product} additem={<AddToCartButton product={product} />} />
            ))}
        </div>
    )
}