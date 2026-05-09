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

export const updateShippingFee = async (newFee: number) => {
  try {
    const res = await prisma.shipping_Fee.update({
      where: { id: 1 },
      data: { fee: newFee },
    });
    return { success: true };
  } catch (err) {
    console.error("送料情報の更新中にエラーが発生しました", err);
    throw err;
  }
};
