import { writeFile } from "node:fs/promises";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";



export async function writeCsv<T extends object>(
  filePath: string,
  data: T[],
) {
  if (!data.length) {
    throw new Error("CSV data is empty");
  }

  const headers = Object.keys(data[0]);

  const rows = data.map((item) =>
    headers
      .map((header) => {
        const value = String(item[header as keyof T] ?? "");
        return `"${value.replace(/"/g, '""')}"`;
      })
      .join(","),
  );

  const csv = [headers.join(","), ...rows].join("\n");
  await mkdir(dirname(filePath), {
    recursive: true,
  });
  await writeFile(filePath, csv, "utf8");
}