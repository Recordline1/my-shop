import {randomItem} from "../utils/random";
const labels = [
    "",
    "",
    "",
    "",
    "",
    "sale",
    "sale",
    "new",
    "hit",
    "exclusive",
] as const;


export function generateLabel() {
    return randomItem(labels);
}