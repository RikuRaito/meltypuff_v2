import { getNicProductsInStock } from "@/lib/api/products";
import { Product } from "@/src/types/product";

export default async function ShopNicServer() {
  // Server Componentから直接Prisma関数を呼び出し
  const prismaData = await getNicProductsInStock();

  // PrismaデータをProduct型にマッピング（全フィールドを含む）
  const products: Product[] = prismaData.map((product) => ({
    id: product.id,
    name: product.name,
    recommend: product.recommend,
    displayName: product.displayName,
    imagePath: product.imagePath,
    price: product.price,
    stock: product.stock,
  }));

  return products;
}
