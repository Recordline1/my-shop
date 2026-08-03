'use client'
import { useEffect } from "react";
import { CatalogFilters } from "@widgets/catalog/filters/ui/CatalogFilters";
import { GetProductsOptions } from "@shared/api/products/types";
import { Category } from "@shared/types/category";
import { Brand } from "@shared/types/brand";

type MobileFiltersDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    options: GetProductsOptions;
    categories: Category[];
    brands: Brand[];
};

export const MobileFiltersDrawer = ({
    isOpen,
    onClose,
    options,
    categories,
    brands,
}: MobileFiltersDrawerProps) => {
   
    useEffect(() => {
        if (!isOpen) return;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

   
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 flex justify-end md:hidden"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="w-full max-w-xs bg-white h-full p-6 overflow-y-auto animate-in slide-in-from-right"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold">Filters</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 text-xl font-bold"
                        aria-label="Close filters"
                    >
                        ✕
                    </button>
                </div>

                <CatalogFilters
                    category={options.category}
                    categories={categories}
                    brand={options.brand}
                    brands={brands}
                    minPrice={options.minPrice}
                    maxPrice={options.maxPrice}
                    inStock={options.inStock}
                />
               
            </div>
        </div>
    );
};