"use server";
import { prisma } from "@/lib/prisma";

export async function updatePaymentStatus(uuid: string) {
  try {
    await prisma.payment.update({
      where: { uuid },
      data: { status: "SHIPPED" },
    });
    return { success: true };
  } catch (err) {
    console.error("注文ステータス変更中にエラーが発生しました");
    throw err;
  }
}
