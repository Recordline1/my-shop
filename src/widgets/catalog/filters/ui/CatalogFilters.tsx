'use client'

import { useCatalogNavigation } from "@shared/lib/navigation/use-catalog-navigation";
import { Category } from "@shared/types/category";
import { Brand } from "@shared/types/brand";
import { useState } from "react";

interface CatalogFiltersProps {
    category?: string;
    categories: Category[]
    brand?: string
    brands: Brand[]
    minPrice?: number
    maxPrice?: number
    inStock?: boolean | undefined
}

export const CatalogFilters = ({ category, categories, brands, brand, minPrice, maxPrice, inStock }: CatalogFiltersProps) => {
    const [min, setMin] = useState(minPrice ?? "");
    const [max, setMax] = useState(maxPrice ?? "");

    const { push } = useCatalogNavigation();


    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        push({ category: e.target.value, page: 1 });
    }
    const handleBrandsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        push({ brand: e.target.value, page: 1 });
    }

    const handlePriceChange = () => {
        push({
            page: 1,
            minPrice: min === "" ? undefined : Number(min),
            maxPrice: max === "" ? undefined : Number(max),
        });
    }

    const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        push({
            inStock: e.target.checked ? true : undefined,
            page: 1
        });
    }

    return (
        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <span className="text-sm text-gray-500">Refine your search</span>
            </div>

            <div className="flex flex-wrap items-end gap-4">
                <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                    <span>Category</span>
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="min-w-[180px] border border-gray-200 rounded-lg bg-white px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors"
                    >
                        {categories.map((category) => (
                            <option key={category.slug} value={category.slug}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                    <span>Brand</span>
                    <select
                        value={brand}
                        onChange={handleBrandsChange}
                        className="min-w-[180px] border border-gray-200 rounded-lg bg-white px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors"
                    >
                        {brands.map((brand) => (
                            <option key={brand.slug} value={brand.slug}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                </label>

                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-gray-700">Price</p>
                    <div className="flex gap-2">
                        <input
                            className="w-24 border border-gray-200 rounded-lg bg-white px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors"
                            type="number"
                            onChange={(e) => setMin(e.target.value)}
                            value={min}

                        />
                        <input
                            className="w-24 border border-gray-200 rounded-lg bg-white px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors"
                            type="number"
                            onChange={(e) => setMax(e.target.value)}
                            value={max}
                        />
                        <button  onClick={handlePriceChange} className="border border-amber-600  px-4 py-2 rounded-md hover:bg-amber-600 transition-colors text-lg font-medium cursor-pointer"> OK</button>
                    </div>
                </div>

                <label className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm font-medium text-gray-700">
                    <input
                        className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        type="checkbox"
                        checked={inStock ?? false}
                        onChange={handleStockChange}
                    />
                    <span>In stock only</span>
                </label>
            </div>
        </div>
    )
}