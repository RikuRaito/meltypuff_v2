"use server";
import { Payment } from "@/src/types/payments";
import { prisma } from "../prisma";
import { PaymentStatus } from "@prisma/client";

export type PaymentFilter = PaymentStatus | "ALL";

export const getPaymentsData = async (filter: PaymentFilter = "COMPLETED") => {
  try {
    const payments = await prisma.payment.findMany({
      where: filter === "ALL" ? {} : { status: filter },
      include: {
        items: true, // PaymentItemも取得
      },
      orderBy: {
        id: "desc",
      },
    });
    return payments;
  } catch (error) {
    console.error("注文情報の取得に失敗しました", error);
    throw error;
  }
};

export const makePaymentsData = async (payments: Payment) => {};
