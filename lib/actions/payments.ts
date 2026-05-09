import { getPaymentsData } from "@/lib/api/payments";
import { Prisma } from "@prisma/client";
import { PaymentFilter } from "@/lib/api/payments";

export type PaymentWithItems = Prisma.PaymentGetPayload<{
  include: { items: true };
}>;

export default async function PaymentsServer(
  filter: PaymentFilter,
): Promise<PaymentWithItems[]> {
  try {
    return await getPaymentsData(filter);
  } catch (error) {
    console.error("支払い情報の取得に失敗しました");
    throw error;
  }
}
