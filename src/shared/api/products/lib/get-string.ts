export function getString(value: string | string[] | undefined) {
  return typeof value === "string" ? value : undefined;
}