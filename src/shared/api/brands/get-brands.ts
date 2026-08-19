import { mapBrand } from "./mapper";
import { getBrandsSource } from "./source";
import { Brand } from "@shared/types/brand";

export async function getBrands(): Promise<Brand[]> {
    const source = await getBrandsSource();
    return source.map(mapBrand);
}