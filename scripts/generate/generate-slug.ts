
export function generateSlug(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}