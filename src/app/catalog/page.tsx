import { Catalog } from "@widgets/catalog/index";
import {SearchParams} from "@shared/api/products/types";
interface CatalogPageProps {
  searchParams: Promise<SearchParams>;
}
export default async function CatalogPge({searchParams}:CatalogPageProps ) {

    const params = await searchParams;
    return (
        <>
            <main className="max-w-6xl mx-auto px-4">
                <Catalog searchParams={params} />
            </main>
        </>
    )
}