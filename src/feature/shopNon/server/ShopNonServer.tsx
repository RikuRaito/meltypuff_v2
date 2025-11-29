import { getNonProductsInStock } from "@/lib/api/products";
import { getDisplayName } from "next/dist/shared/lib/utils";

export type Product = {
  id: number;
  recommend: number;
  imagePath: string;
  displayName: string;
  price: number;
};

export default async function ShopNicServer() {
  const prismaData = await getNonProductsInStock();

  const products: Product[] = prismaData.map((product) => ({
    id: product.id,
    recommend: product.recommend,
    imagePath: product.imagePath,
    displayName: product.displayName,
    price: product.price,
  }));

  return products;
}
