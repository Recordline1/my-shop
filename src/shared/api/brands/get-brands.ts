import {mapBrand} from "./mapper";
import {getBrandsSource} from "./source";

export async function getBrands() {
    const source = await getBrandsSource();
    return source.map(mapBrand);
}