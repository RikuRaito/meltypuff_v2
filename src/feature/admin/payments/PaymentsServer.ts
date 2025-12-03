import { Payment } from "@/src/types/payments";
import { GetPaymentsData } from "@/lib/api/payments";

export default async function PaymentsServer() {
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
    price: payment.price.toString(),
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
}
