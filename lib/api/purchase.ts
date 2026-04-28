"use server";
import { prisma } from "../prisma";

export type CouponResult = {
  success: boolean;
  coupon?: {
    code: string;
    finalPriceRate: number;
  };
  error?: string;
};

// TODO: issue #18 Square決済実装時にhandlePurchaseを実装する
// TODO: issue #21 ニコチン商品削除時にProduct_Nicの参照も削除する

export const applyCoupon = async (coupon: string): Promise<CouponResult> => {
  try {
    const existingCoupon = await prisma.coupon.findUnique({
      where: {
        code: coupon,
      },
    });

    if (!existingCoupon) {
      return {
        success: false,
        error: "クーポンコードが見つかりません",
      };
    }

    return {
      success: true,
      coupon: {
        code: existingCoupon.code,
        // Decimal型をnumber型に変換する必要がある
        finalPriceRate: Number(existingCoupon.finalPriceRate),
      },
    };
  } catch (error) {
    console.error("クーポンの検証中にエラーが発生しました:", error);
    return {
      success: false,
      error: "クーポンの検証中にエラーが発生しました",
    };
  }
};
