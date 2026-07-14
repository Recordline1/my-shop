'use client';

import { useCartStore } from '@entities/cart/model/cartStore';
import { Card } from '@entities/card/model/interface';
import { ShoppingCart, Check } from 'lucide-react';

export const AddToCartButton = ({ product }: { product: Card }) => {
    const { addItem, items } = useCartStore();
    const inCart = items.some(item => item.id === product.id);

    return (
        <button
            disabled={inCart}
            onClick={() => addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
            })}
            className={`
                flex items-center justify-center gap-2 py-2 px-4 rounded-lg
                text-sm font-medium transition-all duration-300 cursor-pointer
                ${inCart
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-amber-600 text-white hover:bg-amber-700 active:scale-95'}
            `}
        >
            {inCart
                ? <><Check size={16} /> Added</>
                : <><ShoppingCart size={16} /> Add to Cart</>
            }
        </button>
    );
};