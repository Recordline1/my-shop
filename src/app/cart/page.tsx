'use client'

import { useCartStore } from '@entities/cart/model/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import {getProductImage} from "@shared/lib/images/get-product-image";
import { ArrowLeft, Trash2, ChevronRight, ShoppingBag } from 'lucide-react';

export default function CartPage() {
    const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore()

    if (items.length === 0) {
        return (
            <main className="max-w-2xl mx-auto p-8 mt-20 text-center">
                <ShoppingBag size={64} className="mx-auto text-gray-200 mb-4" />
                <p className="text-gray-500 text-xl mb-2">Your cart is empty</p>
                <p className="text-gray-400 text-sm mb-6">Add some furniture to get started</p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-2.5 rounded-lg hover:bg-amber-700 transition-colors"
                >
                    <ArrowLeft size={16} /> Back to store
                </Link>
            </main>
        )
    }

    return (
        <main className="max-w-3xl mx-auto px-6 py-10">

            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Cart</h1>
                <Link
                    href="/"
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-amber-600 transition-colors"
                >
                    <ArrowLeft size={16} /> Continue shopping
                </Link>
            </div>

            <div className="flex flex-col gap-3 mb-8">
                {items.map(item => (
                    <div
                        key={item.sku}
                        className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                    >
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                            <Image
                                src={getProductImage(item)}
                                alt={item.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 truncate">{item.name}</p>
                            <p className="text-amber-600 font-medium text-sm mt-0.5">
                                ${item.price.toLocaleString()}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            <button
                                onClick={() => updateQuantity(item.sku, Math.max(1, item.quantity - 1))}
                                className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:border-amber-600 hover:text-amber-600 transition-colors"
                            >
                                -
                            </button>
                            <span className="w-6 text-center font-medium text-gray-900">
                                {item.quantity}
                            </span>
                            <button
                                onClick={() => updateQuantity(item.sku, item.quantity + 1)}
                                className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:border-amber-600 hover:text-amber-600 transition-colors"
                            >
                                +
                            </button>
                        </div>

                        <p className="text-gray-900 font-semibold w-24 text-right shrink-0">
                            ${(item.price * item.quantity).toLocaleString()}
                        </p>

                        <button
                            onClick={() => removeItem(item.sku)}
                            className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer shrink-0"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-semibold">${getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                    <span className="text-gray-500">Delivery</span>
                    <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-gray-900">
                        ${getTotalPrice().toLocaleString()}
                    </span>
                </div>
                <Link
                    href="/checkout"
                    className="flex items-center justify-center gap-2 w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                    Proceed to Checkout <ChevronRight size={18} />
                </Link>
            </div>
        </main>
    )
}