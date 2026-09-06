import { getProductImage } from "@shared/lib/images/get-product-image";
import { Product } from "@shared/types/product";
import { formatPrice } from "@shared/api/products/lib/format-price";
import Image from "next/image";
import Link from "next/link";

const labelConfig: Record<Product['label'], { text: string; className: string }> = {
    '': { text: '', className: '' },
    new: { text: 'New', className: 'bg-blue-500 text-white' },
    sale: { text: 'Sale', className: 'bg-red-500 text-white' },
    hit: { text: 'Hit', className: 'bg-amber-500 text-white' },
    exclusive: { text: 'Exclusive', className: 'bg-purple-600 text-white' },
}

interface ProductCardProps {
    product: Product;
    addItem: React.ReactNode;
}

export const ProductCard = ({ product, addItem }: ProductCardProps) => {
    const label = product.label ? labelConfig[product.label] : null;
    const oldPrice = product.old_price;
    const hasOldPrice = oldPrice !== null && oldPrice > 0 && oldPrice > product.price;
    const discount = hasOldPrice
        ? Math.round((1 - product.price / oldPrice) * 100)
        : null;
    const showDiscount = discount !== null && discount > 0;

   
    const showLabel = label && !(product.label === 'sale' && showDiscount);

    const inStock = product.stock > 0;

    return (
        <div className="group border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white h-full flex flex-col">

            <Link href={`/product/${product.id}`} className="block relative">
                <div className="relative h-56 overflow-hidden">
                    <Image
                        src={getProductImage(product)}
                        fill
                        alt={product.name}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                {inStock ? null : (
                    <div className="absolute inset-0 bg-gray-500/70 flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">Немає в наявності</span>
                    </div>
                )}

                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {showLabel && (
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${label!.className}`}>
                            {label!.text}
                        </span>
                    )}
                    {showDiscount && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-500 text-white">
                            -{discount}%
                        </span>
                    )}
                </div>
            </Link>

            <div className="p-4 flex flex-col flex-1">
                <Link href={`/product/${product.id}`}>
                    <h2 className="font-semibold text-gray-900 text-base mb-1 hover:text-amber-600 transition-colors">
                        {product.name}
                    </h2>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                        {product.description}
                    </p>
                </Link>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center flex-col-reverse mt-auto">
                        <span className="text-lg font-bold text-gray-900">
                            {formatPrice(product.price)} ₴
                        </span>
                        {hasOldPrice && (
                            <span className="text-sm text-gray-400 line-through">
                                {formatPrice(oldPrice)} ₴
                            </span>
                        )}
                    </div>
                    {addItem}
                </div>
            </div>
        </div>
    )
}