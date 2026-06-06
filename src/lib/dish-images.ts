import { dishImages } from "@/data/dish-image-map";

const LOCAL_DISH_IMAGE_BASE_PATH = "/images/menu";

function getDishImageBasePath(): string {
  const r2Base = process.env.NEXT_PUBLIC_R2_PUBLIC_URL?.replace(/\/$/, "");
  if (r2Base) return `${r2Base}/menu`;
  return LOCAL_DISH_IMAGE_BASE_PATH;
}

export function getDishImageUrl(name: string): string | undefined {
  const filename = dishImages[name];
  if (!filename) return undefined;
  return `${getDishImageBasePath()}/${encodeURIComponent(filename)}`;
}
