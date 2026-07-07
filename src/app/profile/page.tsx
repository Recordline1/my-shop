'use client'

import { useAuth } from '@shared/lib/AuthContext'
import { pb } from '@shared/lib/pocketbase'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Order = {
    id: string
    total: number
    status: string
    created: string
    firstname: string
    lastname: string
    address: string
    items: any[]
}

export default function ProfilePage() {
    const { user, logout } = useAuth()
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)
    }, [])


    useEffect(() => {
        if (!user) return

        pb.collection('orders')
            .getList(1, 50, {
                filter: `user = "${user.id}"`,
                sort: '-created',
                requestKey: null,
            })
            .then(res => {
                setOrders(res.items as unknown as Order[])
                setLoading(false)
            })
    }, [user])

    const statusColor: Record<string, string> = {
        pending: 'bg-yellow-100 text-yellow-800',
        confirmed: 'bg-blue-100 text-blue-800',
        delivered: 'bg-green-100 text-green-800',
        canceled: 'bg-red-100 text-red-800',
    }

    if (!hydrated) return null

    return (
        <main className="max-w-3xl mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold">{user?.name || user?.email}</h1>
                    <p className="text-gray-500 text-sm">{user?.email}</p>
                </div>
                <button
                    onClick={() => { logout(); router.push('/') }}
                    className="text-red-500 hover:text-red-700 border border-red-300 px-4 py-2 rounded"
                >
                    Logout
                </button>
            </div>

            <h2 className="text-xl font-semibold mb-4">My orders</h2>

            {loading && <p className="text-gray-500">Loading...</p>}

            {!loading && orders.length === 0 && (
                <p className="text-gray-500">No orders yet</p>
            )}

            <div className="flex flex-col gap-4">
                {orders.map(order => (
                    <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <p className="font-mono text-xs text-gray-400">#{order.id}</p>
                                <p className="text-sm text-gray-500">
                                    {new Date(order.created).toLocaleDateString()}
                                </p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[order.status]}`}>
                                {order.status}
                            </span>
                        </div>

                        <div className="flex flex-col gap-1 mb-3">
                            {order.items.map((item: any) => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span>{item.name} × {item.quantity}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t pt-2 flex justify-between font-bold">
                            <span>Total</span>
                            <span>${order.total.toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}