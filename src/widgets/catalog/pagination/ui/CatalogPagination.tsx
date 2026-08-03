'use client'
import { useCatalogNavigation } from "@shared/lib/navigation/use-catalog-navigation";

interface CatalogPaginationProps {
    page: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
}

export const CatalogPagination = ({ page, totalPages, hasNextPage, hasPrevPage }: CatalogPaginationProps) => {   

    const { push } = useCatalogNavigation();
    const handleNext = () => {
        push({ page: page + 1 });
    }

    const handlePrev = () => {
        push({ page: page - 1 });
    };



    return (
        <div className="flex justify-center items-center gap-4 py-4">
            <button
                disabled={!hasPrevPage}
                onClick={handlePrev}
                className="font-bold disabled:cursor-not-allowed disabled:opacity-50 border border-amber-600  px-4 py-2 rounded-md hover:bg-amber-600 transition-colors text-lg font-medium cursor-pointer"
            >prev</button>
            <div className=" text-gray-700 font-medium">
                <span>Page {page} of {totalPages}</span>
            </div>
            <button
                disabled={!hasNextPage}
                onClick={handleNext}
                className="font-bold disabled:cursor-not-allowed disabled:opacity-50 border border-amber-600  px-4 py-2 rounded-md hover:bg-amber-600 transition-colors text-lg font-medium cursor-pointer"
            >next</button>
        </div>
    )
}