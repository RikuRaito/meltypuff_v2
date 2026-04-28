"use server";

import { prisma } from "../prisma";

/**ノンニコチン商品に関する関数 */
//在庫に関わらず全ての商品情報（ノンニコチン）を抽出
export const getNonProducts = async () => {
  try {
    const products = await prisma.product_Non.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return products;
  } catch (error) {
    console.error("商品データの取得に失敗しました: ", error);
    throw error;
  }
};

//在庫がある商品（ノンニコチン）の商品を抽出
export const getNonProductsInStock = async () => {
  try {
    const prismaData = await prisma.product_Non.findMany({
      where: {
        stock: {
          gt: 0,
        },
      },
      orderBy: {
        id: "asc",
      },
    });
    return prismaData;
  } catch (error) {
    console.error("商品データの取得に失敗しました：", error);
    throw error;
  }
};

// TODO: issue #21 ニコチン商品削除時に以下のコードも削除する
// /**ニコチン商品に関する関数 */
// export const getNicProducts = async () => { ... };
// export const getNicProductById = async (id: number) => { ... };
// export async function getNicProductsInStock() { ... }
