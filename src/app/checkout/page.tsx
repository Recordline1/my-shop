'use client'

import { useRouter } from 'next/navigation'
import { checkoutSubmit } from '@entities/checkout/model/checkoutSubmit'
import Link from 'next/link'
import { ArrowLeft, Package, } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PersonalDetailsForm } from '@entities/checkout/index'
import { DeliveryOptions } from '@entities/checkout/index'
import { PaymentOptions } from '@entities/checkout/index'
import { DeliveryComment } from '@entities/checkout/index'
import { OrderSummary } from '@entities/checkout/index'

export default function CheckoutPage() {
    const router = useRouter()
    const [hydrated, setHydrated] = useState(false)
    const { register, control, handleSubmit, errors, isSubmitting, onSubmit, items, getTotalPrice, deliveryType, paymentTypes } = checkoutSubmit()

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
                        <PersonalDetailsForm register={register} errors={errors} control={control} />

                        {/* Delivery */}
                        <DeliveryOptions register={register} errors={errors} deliveryType={deliveryType} />

                        {/* Payment */}
                        <PaymentOptions register={register} errors={errors} paymentTypes={paymentTypes} />

                        {/* Comment */}
                        <DeliveryComment register={register} />

                        <div className="mt-4 bg-green-50 border border-green-100 rounded-lg px-4 py-3 flex items-center gap-2">
                            <Package size={16} className="text-green-600 shrink-0" />
                            <p className="text-sm text-green-700">Free delivery on orders over $500</p>
                        </div>


                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-amber-600 text-white rounded-xl text-lg py-3 font-bold hover:bg-amber-700 disabled:opacity-50 transition-colors cursor-pointer"
                        >
                            {isSubmitting ? 'Placing order...' : 'Place order'}
                        </button>
                    </form>
                </div>
                {/*  Order summary */}
                <OrderSummary items={items} getTotalPrice={getTotalPrice} />
            </div>
        </main>
    )
}