import { useCartStore } from '@entities/cart/model/cartStore';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export const CartIcon = () => {
    const items = useCartStore(state => state.items);
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link href="/cart" className="relative text-gray-300 text-xs hover:text-amber-400 transition-colors">
            <ShoppingBag size={22} />
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyan-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </Link>
    );
};