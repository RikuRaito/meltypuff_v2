import { getPaymentsData } from "@/lib/api/payments";
import { Prisma } from "@prisma/client";

export type PaymentWithItems = Prisma.PaymentGetPayload<{ include: { items: true } }>;

export default async function PaymentsServer(): Promise<PaymentWithItems[]> {
  try {
    return await getPaymentsData();
  } catch (error) {
    console.error("支払い情報の取得に失敗しました");
    throw error;
  }
}
