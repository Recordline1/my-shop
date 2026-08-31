import { pb } from "@/shared/lib/pocketbase";
import {PocketbaseProductRecord} from "@shared/api/products/types";
export async function getBrandsSource() {

    return pb.collection("brands").getFullList<PocketbaseProductRecord>({
        sort: "name",
    });
}