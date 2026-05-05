"use server";
import { SquareClient, SquareEnvironment } from "square";
import { prisma } from "@/lib/prisma";
import { getNonProductsById } from "@/lib/api/products";
import { sendConfirmationEmail } from "./email";

const client = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN!,
  environment: SquareEnvironment.Sandbox,
});

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  address1: string;
  address2: string;
}

export const handleCheckout = async (
  token: string,
  amount: number,
  customer: CustomerInfo,
  cartItems: { id: number; qty: number }[],
) => {
  try {
    console.log("customer:", customer);
    const response = await client.payments.create({
      sourceId: token,
      idempotencyKey: crypto.randomUUID(),
      amountMoney: {
        amount: BigInt(amount),
        currency: "JPY",
      },
    });

    if (!response.payment?.id) {
      return { success: false, error: "決済に失敗しました" };
    }

    const products = await Promise.all(
      cartItems.map(async (item) => {
        const product = await getNonProductsById(item.id);
        return { product, qty: item.qty };
      }),
    );

    const payment = await prisma.payment.create({
      data: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        zipCode: customer.zipCode,
        address1: customer.address1,
        address2: customer.address2,
        price: amount,
        status: "COMPLETED",
        items: {
          create: products
            .filter(({ product }) => product !== null)
            .map(({ product, qty }) => ({
              productId: product!.id,
              productType: "non",
              productName: product!.name,
              displayName: product!.displayName,
              imagePath: product!.imagePath[0],
              price: product!.price,
              quantity: qty,
            })),
        },
      },
    });

    await sendConfirmationEmail(customer.email, payment.uuid);

    return { success: true, uuid: payment.uuid };
  } catch (err) {
    console.error("決済エラー:", err);
    return { success: false, error: "決済に失敗しました" };
  }
};
