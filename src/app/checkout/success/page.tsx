import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function SuccessPage({
  searchParams,
}: {
  searchParams:Promise<{ orderId: string }>
}) {
    const {orderId} = await searchParams;
  return (
    <main className="max-w-md mx-auto p-8 mt-20 text-center">
      <div className="text-6xl mb-4">🎉</div>
      <h1 className="text-2xl font-bold mb-2">Order placed!</h1>
      <p className="text-gray-500 mb-2">Your order number:</p>
      <p className="font-mono bg-gray-100 rounded px-4 py-2 text-sm mb-6 break-all">
        {orderId}
      </p>
      <p className="text-gray-600 mb-6">
        We will contact you soon to confirm delivery.
      </p>
      <div className="flex flex-col gap-3">
        <Link
          href="/profile"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          View my orders
        </Link>
        <Link
          href="/"
          className="flex gap-2 items-center justify-center text-cyan-600"
        >
          <ArrowLeft size={16} /> Back to store
        </Link>
      </div>
    </main>
  )
}