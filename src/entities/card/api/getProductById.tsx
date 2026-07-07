export async function getProductById(id: string) {
  const res = await fetch(`https://pb.portfoliothe.pics/api/collections/products/records/${id}`, {
    cache: 'no-store'
  })
  const data = await res.json()
  return data
}