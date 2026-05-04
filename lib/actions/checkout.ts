"use server";
import { SquareClient, SquareEnvironment } from "square";
import { prisma } from "@/lib/prisma";

const client = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN!,
  environment: SquareEnvironment.Sandbox,
});

export const handleCheckout = async (token: string, amount: number) => {
  console.log("amount received: ", amount, typeof amount);
  try {
    const response = await client.payments.create({
      sourceId: token,
      idempotencyKey: crypto.randomUUID(),
      amountMoney: {
        amount: BigInt(amount),
        currency: "JPY",
      },
    });
    console.log("response: ", response);
    return { success: true, payment: response.payment };
  } catch (err) {
    console.error("決済エラー:", err);
    return {
      success: false,
      error: "決済に失敗しました",
    };
  }
};
