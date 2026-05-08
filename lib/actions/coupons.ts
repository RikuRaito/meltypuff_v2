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

export const ApplyCoupon = async (code: string) => {
  try {
    const data = await prisma.coupon.findUnique({
      where: { code: code },
    });
    if (!data?.isActive) {
      return { success: false };
    }
    const type = data?.type;
    const discountRate = data?.discountRate;
    return { success: true, apply: { type: type, discountRate: discountRate } };
  } catch (err) {
    console.error("クーポン適用処理中にエラーが発生しました", err);
    throw err;
  }
};

export const ChangeActiveCoupon = async (code: string) => {
  try {
    const existCoupon = await prisma.coupon.findUnique({
      where: { code: code },
    });

    if (!existCoupon) return { success: false };

    await prisma.coupon.update({
      where: { code },
      data: { isActive: !existCoupon.isActive },
    });
    return { success: true };
  } catch (err) {
    console.error("クーポンの有効/無効切り替え時にエラーが発生しました", err);
    throw err;
  }
};
