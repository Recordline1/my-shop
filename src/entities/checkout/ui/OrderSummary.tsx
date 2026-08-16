import Image from "next/image"

export const OrderSummary = ({ items, getTotalPrice }: { items: any[], getTotalPrice: () => number }) => {
    return (
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
                                            src={item.image}
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
    )
}