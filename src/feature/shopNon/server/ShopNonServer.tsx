import { getNonProductsInStock } from "@/lib/api/products";
import { Product } from "@/src/types/product";

export default async function ShopNicServer() {
  const prismaData = await getNonProductsInStock();

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
