import Link from "next/link";
import { Category } from "@shared/types/category";
import { categoryIcons } from "@/entities/categories/model/categoryIcons";

export const CategoryGrid = ({ categories }: { categories: Category[] }) => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Категорії</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={`/catalog?category=${category.slug}`}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-white p-6 text-center hover:border-amber-600 hover:shadow-sm transition-all"
                >
                    <span className="text-amber-600">
                        {categoryIcons[category.icon]}
                    </span>
                    <span className="text-sm font-medium text-gray-800">{category.name}</span>
                </Link>
            ))}
        </div>
    </section>
);