import { getProduct } from "@shared/api/products/get-product"
import { AddToCartButton } from "@features/cart/ui/AddToCartButton";
import { ProductGallery } from "@features/product/ui/ProductGallery";
import { ArrowLeft } from 'lucide-react';
import Link from "next/link";
import { notFound } from "next/navigation";

const LABEL_STYLES: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  sale: "bg-red-100 text-red-700",
  hit: "bg-amber-100 text-amber-700",
  exclusive: "bg-purple-100 text-purple-700",
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound();
  }

  const discountPercent = product.old_price
    ? Math.round((1 - product.price / product.old_price) * 100)
    : null;

  return (
    <main className="max-w-5xl mx-auto p-4">
      <Link href="/catalog" className="flex gap-2 items-center text-cyan-600 mb-4">
        <ArrowLeft size={18} /> Back to store
      </Link>

      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href={`/catalog?category=${product.category.slug}`} className="hover:text-amber-600">
          {product.category.name}
        </Link>
        <span>/</span>
        <span className="text-gray-700">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery
          images={product.images}
          alt={product.name}
          badge={
            product.label ? (
              <span className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-semibold ${LABEL_STYLES[product.label]}`}>
                {product.label}
              </span>
            ) : undefined
          }
        />

        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-1">{product.brand.name}</p>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            {product.sku && (
              <p className="text-xs text-gray-400 mb-4">Артикул: {product.sku}</p>
            )}

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="flex items-baseline gap-3 mb-4">
              <p className="text-3xl text-gray-900 font-bold">{product.price.toLocaleString("uk-UA")} ₴</p>
              {product.old_price && (
                <>
                  <p className="text-lg text-gray-400 line-through">
                    {product.old_price.toLocaleString("uk-UA")} ₴
                  </p>
                  <span className="text-sm font-semibold text-red-600">-{discountPercent}%</span>
                </>
              )}
            </div>

            <p className={`text-sm font-medium mb-6 ${product.inStock ? "text-green-600" : "text-red-500"}`}>
              {product.inStock ? `В наявності (${product.stock} шт.)` : "Немає в наявності"}
            </p>

            {product.colors.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Колір</p>
                <div className="flex gap-2">
                  {product.colors.map( color => (
                    <span
                      key={color}
                      title={color}
                      className="w-7 h-7 rounded-full border border-gray-300 cursor-pointer"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              {product.size && (
                <div>
                  <p className="text-gray-400">Розмір</p>
                  <p className="text-gray-800 font-medium">{product.size}</p>
                </div>
              )}
              {product.materials.length > 0 && (
                <div>
                  <p className="text-gray-400">Матеріал</p>
                  <p className="text-gray-800 font-medium">{product.materials.join(", ")}</p>
                </div>
              )}
            </div>
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  )
}