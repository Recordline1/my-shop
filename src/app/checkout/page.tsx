'use client'

import { useRouter } from 'next/navigation'
import { checkoutSubmit } from '@entities/checkout/model/checkoutSubmit'
import Link from 'next/link'
import { ArrowLeft, User, Phone, MapPin, Package, Mail, MapPinHouse } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function CheckoutPage() {
    const router = useRouter()
    const [hydrated, setHydrated] = useState(false)
    const { register, handleSubmit, errors, isSubmitting, onSubmit, items, getTotalPrice, deliveryType } = checkoutSubmit()

    useEffect(() => setHydrated(true), [])
    if (!hydrated) return null

    return (
        <main className="max-w-6xl mx-auto px-6 py-10">

            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/cart"
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-amber-600 transition-colors"
                >
                    <ArrowLeft size={16} /> Back to cart
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

                        {/*  Personal details */}
                        <div className="bg-white ">
                            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                                Personal details
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">First name *</label>
                                    <div className="relative">
                                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            {...register('firstname')}
                                            placeholder="John"
                                            className="border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                                        />
                                    </div>
                                    {errors.firstname && <p className="text-red-500 text-xs mt-1">{errors.firstname.message}</p>}
                                </div>

                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Last name *</label>
                                    <div className="relative">
                                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            {...register('lastname')}
                                            placeholder="Doe"
                                            className="border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                                        />
                                    </div>
                                    {errors.lastname && <p className="text-red-500 text-xs mt-1">{errors.lastname.message}</p>}
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="text-xs text-gray-500 mb-1 block">Email *</label>
                                    <div className="relative">
                                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            {...register('email')}
                                            placeholder="Email"
                                            className="border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>


                                <div className="sm:col-span-2">
                                    <label className="text-xs text-gray-500 mb-1 block">Phone</label>
                                    <div className="relative">
                                        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            {...register('phone')}
                                            placeholder="+380(__) ___-__-__"
                                            className="border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                                        />
                                    </div>
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Delivery */}
                        <div>
                            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                                Delivery
                            </h2>
                            <div className="bg-white mb-4 border border-gray-100 rounded-xl  shadow-sm">
                                <div className="flex flex-col gap-2 mb-4">
                                    {[
                                        { value: 'nova_poshta', label: 'Nova Poshta' },
                                        { value: 'courier', label: 'Courier delivery' },
                                        { value: 'pickup', label: 'Pickup' },
                                    ].map(option => (
                                        <label
                                            key={option.value}
                                            className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition-colors
                                             ${deliveryType === option.value
                                                    ? 'border-amber-600 bg-amber-50'
                                                    : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                value={option.value}
                                                {...register('delivery_type')}
                                                className="accent-amber-600"
                                            />
                                            <span className="text-sm font-medium text-gray-900">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.delivery_type && <p className="text-red-500 text-xs mb-3">{errors.delivery_type.message}</p>}
                                {deliveryType === 'nova_poshta' && (
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <label className="text-xs text-gray-500 mb-1 block">City</label>
                                            <input
                                                {...register('nova_poshta_city')}
                                                placeholder="Kyiv"
                                                className="border border-gray-200 rounded-lg px-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                                            />
                                            {errors.nova_poshta_city && <p className="text-red-500 text-xs mt-1">{errors.nova_poshta_city.message}</p>}
                                        </div>
                                        <div>
                                            <label className="text-xs text-gray-500 mb-1 block">Branch number</label>
                                            <input
                                                {...register('nova_poshta_branch')}
                                                placeholder="Branch №1"
                                                className="border border-gray-200 rounded-lg px-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                                            />
                                            {errors.nova_poshta_branch && <p className="text-red-500 text-xs mt-1">{errors.nova_poshta_branch.message}</p>}
                                        </div>
                                    </div>
                                )}
                                {deliveryType === 'courier' && (
                                    <div className="relative">
                                        <label className="text-xs text-gray-500 mb-1 block">Delivery only in Kyiv, Kharkiv and Odesa</label>
                                        <MapPin size={16} className="absolute left-3 top-8 text-gray-400" />
                                        <textarea
                                            {...register('address')}
                                            placeholder="City, street, building"
                                            rows={3}
                                            className="border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
                                        />
                                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                                    </div>
                                )}
                                {deliveryType === 'pickup' && (
                                    <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
                                        <p className="text-sm flex gap-2 items-center"><MapPin size={16} /> Our address: Kyiv, Khreshchatyk st, 1</p>
                                        <p className="text-xs text-gray-500 mt-1">Mon–Sat 9:00–20:00</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Payment */}

                        <div className="bg-white">
                            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                                Payment
                            </h2>

                            <div className="flex flex-col gap-2">
                                {[
                                    { value: 'card', label: 'Card online' },
                                    { value: 'cash', label: 'Cash on delivery' },
                                    { value: 'online', label: 'Online banking' },
                                ].map(option => (
                                    <label
                                        key={option.value}
                                        className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer transition-colors has-[:checked]:border-amber-600 "
                                    >
                                        <input
                                            type="radio"
                                            value={option.value}
                                            {...register('payment_type')}
                                            className="accent-amber-600"
                                        />
                                        <span className="text-sm font-medium text-gray-900">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.payment_type && <p className="text-red-500 text-xs mt-2">{errors.payment_type.message}</p>}
                        </div>
                        {/* Comment */}

                        <div className="bg-white">
                            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">4</span>
                                Comment (optional)
                            </h2>
                            <textarea
                                {...register('comment')}
                                placeholder="Any wishes for your order..."
                                rows={3}
                                className="border border-gray-200 rounded-lg px-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
                            />
                        </div>

                        <div className="mt-4 bg-green-50 border border-green-100 rounded-lg px-4 py-3 flex items-center gap-2">
                            <Package size={16} className="text-green-600 shrink-0" />
                            <p className="text-sm text-green-700">Free delivery on orders over $500</p>
                        </div>


                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-amber-600 text-white rounded-xl py-3.5 font-medium hover:bg-amber-700 disabled:opacity-50 transition-colors cursor-pointer"
                        >
                            {isSubmitting ? 'Placing order...' : 'Place order'}
                        </button>
                    </form>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm sticky top-24">
                        <h2 className="font-semibold text-gray-900 mb-4">
                            Order summary ({items.length})
                        </h2>

                        <div className="flex flex-col gap-3 mb-4">
                            {items.map(item => (
                                <div key={item.id} className="flex items-center gap-3">
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                                        <Image
                                            src={`https://pb.portfoliothe.pics/api/files/products/${item.id}/${item.image}`}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                                        <p className="text-xs text-gray-500">× {item.quantity}</p>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900 shrink-0">
                                        ${(item.price * item.quantity).toLocaleString()}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Subtotal</span>
                                <span>${getTotalPrice().toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Delivery</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between font-bold text-gray-900 text-base mt-2 pt-2 border-t border-gray-100">
                                <span>Total</span>
                                <span>${getTotalPrice().toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}