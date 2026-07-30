// JSON: public/data/json/products.json
import products from "@/../public/data/json/products.json";

// CSV: public/data/cvs/products.csv
// import products from "@/../public/data/cvs/products.csv";

export async function getProductsSource() {
    return products;
}