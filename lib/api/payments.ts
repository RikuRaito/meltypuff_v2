"use server";
import { prisma } from "../prisma";

export const GetPaymentsData = async () => {
  try {
    const payments = await prisma.payment.findMany({
      include: {
        items: true, // PaymentItemも取得
      },
      orderBy: {
        id: "asc",
      },
    });
    return payments;
  } catch (error) {
    console.error("注文情報の取得に失敗しました", error);
    throw error;
  }
};
