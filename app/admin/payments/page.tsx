import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PaymentsServer from "@/src/feature/admin/payments/PaymentsServer";
import PaymentsList from "@/src/feature/admin/payments/PaymentsList";
import { Payment } from "@/src/types/payments";

export default async function AdminPayments() {
  const session = await auth();
  if (!session) {
    redirect("/admin/login");
  }

  let payments: Payment[] = [];
  try {
    payments = await PaymentsServer();
  } catch (error) {
    console.error("支払い情報のレンダリングに失敗しました(at.page.tsx)", error);
    // エラー時は空配列のまま
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">注文一覧</h1>
        <PaymentsList payments={payments} />
      </div>
    </div>
  );
}
