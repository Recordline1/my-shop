'use client';

import { useCartStore } from '@entities/cart/model/cartStore';
import { Card } from '@entities/card/model/interface';



export const AddToCartButton = ({ product }: { product: Card }) => {
    const {addItem,items} = useCartStore();
    const inCart = items.some(item => item.id === product.id);

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={inCart}
            onClick={() => addItem(
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                }
            )}
        >
            {inCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
    );
};