"use server";
import { prisma } from "../prisma";
import { Prisma } from "@prisma/client";

export const getAllCoupons = async () => {
  try {
    const res = await prisma.coupon.findMany();
    return { success: true, data: res };
  } catch (err) {
    console.error("クーポン情報の取得処理に失敗しました");
    throw err;
  }
};

export const AddNewCoupon = async (data: Prisma.CouponCreateInput) => {
  try {
    await prisma.coupon.create({ data });
    return { success: true };
  } catch (err) {
    console.error("クーポンの新規発行処理に失敗しました", err);
    throw err;
  }
};
