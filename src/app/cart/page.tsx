'use client'

import { useCartStore } from '@entities/cart/model/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { OctagonX } from 'lucide-react';
import { ChevronRight } from 'lucide-react';


export default function CartPage() {
    const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore()

    if (items.length === 0) {
        return (
            <main className="max-w-2xl mx-auto p-8 mt-10 text-center">
                <p className="text-gray-500 text-xl mb-4">Cart is empty</p>
                <Link href="/" className="flex gap-2 items-center text-cyan-600 mb-6 "><ArrowLeft /> Back to store</Link>
            </main>
        )
    }

    return (
        <main className="max-w-2xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Cart</h1>

            <div className="flex flex-col gap-4">
                {items.map(item => (
                    <div key={item.id} className="flex items-center gap-4 border rounded-lg p-4">
                        <Image
                            src={`https://pb.portfoliothe.pics/api/files/products/${item.id}/${item.image}`}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="w-16 h-16 object-cover"
                        />
                        <div className="flex-1">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-green-600">${item.price}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 border rounded flex items-center justify-center"
                            >-</button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 border rounded flex items-center justify-center"
                            >+</button>
                        </div>

                        <button onClick={() => removeItem(item.id)}
                            className="text-red-300 hover:text-red-800 transition-colors duration-300 cursor-pointer  hover:bg-red-100">
                            <OctagonX size={24} />
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-6 border-t pt-4 flex justify-between items-center">
                <p className="text-xl font-bold">Total: ${getTotalPrice().toLocaleString()}</p>

                <a
                    href="/checkout"
                    className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700"
                >
                    Checkout <ChevronRight size={18} /> 
                </a>
            </div>

        </main >
    )
}