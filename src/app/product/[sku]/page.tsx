import { getProduct } from "@shared/api/products/get-product"
import { AddToCartButton } from "@features/cart/ui/AddToCartButton";
import { getProductImage } from "@shared/lib/images/get-product-image";
import { ArrowLeft } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


export default async function ProductPage({ params }: { params: Promise<{ sku: string }> }) {
  const { sku } = await params
  const product = await getProduct(sku)

  if (!product) {
    notFound();
  }
  return (
    <main className="max-w-4xl mx-auto p-8">
      <Link href="/" className="flex gap-2 items-center text-cyan-600 mb-6 "><ArrowLeft /> Back to store</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 rounded-md overflow-hidden">
          <Image
            src={getProductImage(product)}
            fill
            alt={product.name}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-3xl text-green-600 font-bold">${product.price}</p>
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  )
}

