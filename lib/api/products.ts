import { prisma } from "../prisma";

/**ノンニコチン商品に関する関数 */

/**ニコチン商品に関する関数 */
//在庫に関わらず全ての商品情報（ニコチン）を抽出
export async function getNicProducts() {
  try {
    const products = await prisma.product_Nic.findMany({
      orderBy: {
        id: "asc", // IDの昇順でソート
      },
    });
    return products;
  } catch (error) {
    console.error("商品データの取得に失敗しました:", error);
    throw error;
  }
}

//IDで特定の商品（ニコチン）を抽出
export async function getNicProductById(id: number) {
  try {
    const product = await prisma.product_Nic.findUnique({
      where: {
        id: id,
      },
    });
    return product;
  } catch (error) {
    console.error("商品データの取得に失敗しました:", error);
    throw error;
  }
}

//在庫がある商品（ニコチン）だけを抽出
export async function getNicProductsInStock() {
  try {
    const products = await prisma.product_Nic.findMany({
      where: {
        stock: {
          gt: 0, // stock > 0
        },
      },
      orderBy: {
        id: "asc",
      },
    });
    return products;
  } catch (error) {
    console.error("商品データの取得に失敗しました:", error);
    throw error;
  }
}
