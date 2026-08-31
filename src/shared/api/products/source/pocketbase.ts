import { pb } from "@shared/lib/pocketbase";
import {PocketbaseProductRecord} from "@shared/api/products/types";

export async function getProductsSource() {
    return pb.collection("products").getFullList<PocketbaseProductRecord>({
        sort: "name",
        expand: "category,brand", 
        requestKey: null,
    });
}