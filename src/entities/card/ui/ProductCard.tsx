import { Card } from "../model/interface";
import Image from "next/image";
import Link from "next/link";


export const ProductCard = ({ product, additem }: { product: Card, additem: React.ReactNode }) => {
    return (
        <div className="border rounded-md p-4 shadow-sm">
            <Link href={`product/${product.id}`} className="block">
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
            </Link>
            {additem}
        </div>
    )
}