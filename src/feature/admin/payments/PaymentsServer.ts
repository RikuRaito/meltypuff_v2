import { Payment } from "@/src/types/payments";
import { GetPaymentsData } from "@/lib/api/payments";

export default async function PaymentsServer() {
  try {
    const prismaData = await GetPaymentsData();

    // PrismaデータをPayment型にマッピング
    const payments: Payment[] = prismaData.map((payment) => ({
      id: payment.id,
      name: payment.name,
      email: payment.email,
      phone: payment.phone,
      zipCode: payment.zipCode,
      address1: payment.address1,
      address2: payment.address2,
      price: payment.price,
      coupon: payment.coupon || "",
      status: payment.status,
      createdAt: payment.createdAt,
      item: payment.items.map((item) => ({
        id: item.id.toString(),
        displayName: item.displayName,
        quantity: item.quantity,
      })),
    }));

    return payments;
  } catch (error) {
    console.error("支払い情報のマッピングに失敗しました");
    throw error;
  }
}
