import {pb} from "@shared/lib/pocketbase";
import {PocketbaseProductRecord} from "@shared/api/products/types";



export async function getCategoriesSource() {
    return pb.collection("categories").getFullList<PocketbaseProductRecord>({
        sort: "name",
    })
}


