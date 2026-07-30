import {mapCategories} from "./mapper/index";
import {getCategoriesSource} from "./source/index";

export async function getCategories() {
    const source = await getCategoriesSource();
    return source.map(mapCategories);
}
