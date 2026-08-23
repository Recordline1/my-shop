
import Link from "next/link";
import Image from "next/image";
import { Category } from "@shared/types/category";

export const CategoryGrid = ({ categories }: { categories: Category[] }) => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Категорії</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={`/catalog?category=${category.slug}`}
                    className="group relative h-40 rounded-xl overflow-hidden"
                >
                    <Image
                        src={category.image ?? "/images/placeholders/no-image.jpg"}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, 25vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-white font-semibold text-lg">
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    </section>
);