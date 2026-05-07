import { prisma } from "../prisma";

export const getAllCoupons = async () => {
  try {
    const res = await prisma.coupon.findMany();
    return { success: true, data: res };
  } catch (err) {
    console.error("クーポン情報の取得処理に失敗しました");
    throw err;
  }
};

export const AddNewCoupon = async () => {};
