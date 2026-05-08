"use server";
import { prisma } from "../prisma";

export const getShippingFee = async () => {
  try {
    const fee = await prisma.shipping_Fee.findFirst();
    return { success: true, fee: fee };
  } catch (err) {
    console.error("送料情報の取得時にエラーが発生しました", err);
    throw err;
  }
};
