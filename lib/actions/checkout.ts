"use server";
import { SquareClient, SquareEnvironment } from "square";
import { prisma } from "@/lib/prisma";
import { getNonProductsById } from "@/lib/api/products";
import { notifyOrderToAdmin, sendConfirmationEmail } from "./email";

const client = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN!,
  environment: SquareEnvironment.Production,
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
  customer: CustomerInfo,
  cartItems: { id: number; qty: number }[],
  couponCode?: string,
) => {
  try {
    const shippingFee = await prisma.shipping_Fee.findFirst();
    const products = await Promise.all(
      cartItems.map(async (item) => {
        const product = await getNonProductsById(item.id);
        return { product, qty: item.qty };
      }),
    );

    let amount = products.reduce((sum, { product, qty }) => {
      return sum + (product?.price ?? 0) * qty;
    }, shippingFee?.fee ?? 250);

    if (couponCode) {
      const coupon = await prisma.coupon.findUnique({
        where: { code: couponCode, isActive: true },
      });
      if (coupon) {
        if (coupon.type === "PERCENT_OFF") {
          amount = Math.floor(amount * (1 - Number(coupon.discountRate) / 100));
        } else if (coupon.type === "AMOUNT_OFF") {
          amount = Math.max(0, amount - Number(coupon.discountRate));
        }
      }
    }

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
    await notifyOrderToAdmin(payment.uuid, amount, customer.name);

    return { success: true, uuid: payment.uuid };
  } catch (err) {
    console.error("決済エラー:", err);
    return { success: false, error: "決済に失敗しました" };
  }
};
