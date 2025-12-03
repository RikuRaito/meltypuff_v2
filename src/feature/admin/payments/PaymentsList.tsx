"use client";
import { Payment } from "@/src/types/payments";

type PaymentsListProps = {
  payments: Payment[];
};

export default function PaymentsList({ payments }: PaymentsListProps) {
  return (
    <div>
      {/* PaymentsListの実装を追加 */}
      <p>注文一覧がここに表示されます</p>
      <p>注文数: {payments.length}</p>
    </div>
  );
}
