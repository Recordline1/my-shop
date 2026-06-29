

export async function getProducts() {
  const res = await fetch('https://pb.portfoliothe.pics/api/collections/products/records', {
    cache: 'no-store'
  })
  const data = await res.json()
  return data.items
}