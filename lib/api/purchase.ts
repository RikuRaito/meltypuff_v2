"use server";
import { prisma } from "../prisma";

export type CouponResult = {
  success: boolean;
  coupon?: {
    code: string;
    type: "PERCENT_OFF" | "AMOUNT_OFF";
    discountRate: number;
  };
  error?: string;
};

// TODO: issue #21 ニコチン商品削除時にProduct_Nicの参照も削除する

export const applyCoupon = async (coupon: string): Promise<CouponResult> => {
  try {
    const existingCoupon = await prisma.coupon.findUnique({
      where: { code: coupon, isActive: true },
    });

    if (!existingCoupon) {
      return { success: false, error: "クーポンコードが見つかりません" };
    }

    return {
      success: true,
      coupon: {
        code: existingCoupon.code,
        type: existingCoupon.type,
        discountRate: Number(existingCoupon.discountRate),
      },
    };
  } catch (error) {
    console.error("クーポンの検証中にエラーが発生しました:", error);
    return { success: false, error: "クーポンの検証中にエラーが発生しました" };
  }
};
