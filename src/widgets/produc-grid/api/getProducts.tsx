import {pb} from "@shared/lib/pocketbase";

export async function getProducts() {

const products = await pb.collection('products').getFullList({
  sort: 'name',
   requestKey: null,
})
return products

  // const res = await fetch('https://pb.portfoliothe.pics/api/collections/products/records', {
  //   cache: 'no-store'
  // })
  // const data = await res.json()
  // return data.items
}