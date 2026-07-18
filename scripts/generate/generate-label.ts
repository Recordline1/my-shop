import {randomItem} from "../shared/random";
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