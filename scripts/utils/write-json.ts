import {writeFile} from "node:fs/promises";


export async function writeJson<T>(filePath: string, data: T) {
    await writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}