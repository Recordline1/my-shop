import { useCartStore } from '@entities/cart/model/cartStore';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useSyncExternalStore } from 'react';

export const CartIcon = () => {
    const mounted = useSyncExternalStore(
        () => () => { },
        () => true,
        () => false,
    );
    const { items, getTotalPrice } = useCartStore();
    const totalPrice = mounted ? getTotalPrice() : 0;
    const totalItems = mounted ? items.reduce((total, item) => total + item.quantity, 0) : 0;

    return (
        <Link href="/cart" className="flex flex-col w-15 items-center justify-center translate-y-[10px]">
            <div className="relative text-gray-300 text-xs hover:text-amber-400 transition-colors">
                <ShoppingBag size={22} />
                    <span className={"absolute -top-2 -right-2 bg-cyan-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"}>
                        {totalItems}
                    </span>
            </div>

            <span className={`mt-1 inline-block text-white text-xs ${totalPrice > 0 ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                {totalPrice.toLocaleString("uk-UA")} ₴
            </span>

        </Link>
    );
};