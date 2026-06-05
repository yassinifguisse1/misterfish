import { DISH_IMAGE_BASE_PATH, dishImages } from "@/data/dish-image-map";

export function getDishImageUrl(name: string): string | undefined {
  const filename = dishImages[name];
  if (!filename) return undefined;
  return `${DISH_IMAGE_BASE_PATH}/${encodeURIComponent(filename)}`;
}
