import { Catalog } from "@widgets/catalog/index";
import {SearchParams} from "@shared/api/products/types";
interface CatalogPageProps {
  searchParams: Promise<SearchParams>;
}
export default async function CatalogPge({searchParams}:CatalogPageProps ) {

    const params = await searchParams;
    return (
        <>
            <main className="container mx-auto p-8">
                <Catalog searchParams={params} />
            </main>
        </>
    )
}