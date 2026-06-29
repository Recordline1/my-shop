import { ProductList } from '@widgets/produc-list/index';

export default async function Home() {

  return (
    <>
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">My Shop</h1>
        <ProductList />
      </main>
    </>
  )
}