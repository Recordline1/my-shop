import { pb } from "@shared/lib/pocketbase";

export async function getProductsSource() {
    return pb.collection("products").getFullList({
        sort: "name",
        requestKey: null,
    });
}