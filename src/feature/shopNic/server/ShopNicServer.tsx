import { getNicProductsInStock } from "@/lib/api/products";

export type Product = {
  id: number;
  recommend: number;
  imagePath: string;
  productName: string;
  price: number;
};

export default async function ShopNicServer() {
  // Server Componentから直接Prisma関数を呼び出し
  const prismaData = await getNicProductsInStock();

  // PrismaのdisplayNameをproductNameにマッピング
  const products: Product[] = prismaData.map((product) => ({
    id: product.id,
    recommend: product.recommend,
    imagePath: product.imagePath,
    productName: product.displayName,
    price: product.price,
  }));

  return products;
}
