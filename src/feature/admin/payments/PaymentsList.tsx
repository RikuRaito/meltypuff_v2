"use client";
import { Payment } from "@/src/types/payments";

type PaymentsListProps = {
  payments: Payment[];
};

export default function PaymentsList({ payments }: PaymentsListProps) {
  if (payments.length === 0) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow">
        <p className="text-gray-500">支払い情報がありません</p>
      </div>
    );
  }

  return (
    <div>
      {payments.map((payment) => (
        <div key={payment.id}></div>
      ))}
    </div>
  );
}
