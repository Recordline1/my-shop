
'use client'

import { useRouter } from 'next/navigation'
import {checkoutSubmit} from '@entities/checkout/model/checkoutSubmit'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'



export default function CheckoutPage() {
    const router = useRouter()
    const [hydrated, setHydrated] = useState(false)   
    const {register, handleSubmit, errors, isSubmitting, onSubmit, items, getTotalPrice } = checkoutSubmit()

    useEffect(() => {
        setHydrated(true)
    }, [])

   

    if (!hydrated) return null


    return (
        <main className="max-w-2xl mx-auto p-8">
            <Link href="/cart" className="flex gap-2 items-center text-cyan-600 mb-6">
                <ArrowLeft /> Back to cart
            </Link>

            <h1 className="text-2xl font-bold mb-6">Checkout</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <h2 className="font-semibold text-lg">Delivery details</h2>

                    <div>
                        <input
                            {...register('firstname')}
                            placeholder="First name"
                            className="border rounded-md p-2 w-full"
                        />
                        {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
                    </div>

                    <div>
                        <input
                            {...register('lastname')}
                            placeholder="Last name"
                            className="border rounded-md p-2 w-full"
                        />
                        {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
                    </div>

                    <div>
                        <input
                            {...register('phone')}
                            placeholder="Phone number 380XXXXXXXXX"
                            className="border rounded-md p-2 w-full"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <textarea
                            {...register('address')}
                            placeholder="Delivery address"
                            rows={3}
                            className="border rounded-md p-2 w-full"
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-green-600 text-white rounded px-6 py-3 hover:bg-green-700 disabled:opacity-50 mt-2 cursor-pointer"
                    >
                        {isSubmitting ? 'Placing order...' : 'Place order'}
                    </button>
                </form>

                <div>
                    <h2 className="font-semibold text-lg mb-4">Order summary</h2>
                    <div className="flex flex-col gap-2">
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between text-sm">
                                <span>{item.name} × {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t mt-4 pt-4 flex justify-between font-bold">
                        <span>Total</span>
                        <span>${getTotalPrice().toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </main>
    )
}