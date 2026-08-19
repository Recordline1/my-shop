
export const PLACEHOLDER_NO_IMAGE =
  "/images/placeholders/no-image.jpg";
export function getProductImage({image}:{image?:string}):string {
    return image ?? PLACEHOLDER_NO_IMAGE;
}