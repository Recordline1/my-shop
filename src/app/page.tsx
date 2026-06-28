import Image from 'next/image'

async function getProducts() {
  const res = await fetch('https://pb.portfoliothe.pics/api/collections/products/records', {
    cache: 'no-store'
  })
  const data = await res.json()
  return data.items
}

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Мой магазин</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product: any) => (
          <div key={product.id} className="border rounded-md p-4 shadow-sm">
            <div className="relative h-58  roundred-md mb-4 overflow-hidden">
              <Image
                src={`https://pb.portfoliothe.pics/api/files/products/${product.id}/${product.image}`}
                fill
                alt={product.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              ></Image>
            </div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-green-600 font-bold mt-4">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}