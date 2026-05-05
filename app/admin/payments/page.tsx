import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PaymentsServer, { PaymentWithItems } from "@/lib/actions/payments";
import PaymentCard from "@/src/components/admin/PaymentCard";

export default async function AdminPayments() {
  const session = await auth();
  if (!session) {
    redirect("/admin/login");
  }

  let payments: PaymentWithItems[] = [];
  try {
    payments = await PaymentsServer();
  } catch (error) {
    console.error("支払い情報のレンダリングに失敗しました(at.page.tsx)", error);
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-15 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">注文一覧</h1>
        {payments.length === 0 ? (
          <div className="rounded-lg bg-white p-8 text-center shadow">
            <p className="text-gray-500">支払い情報がありません</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {payments.map((payment) => (
              <PaymentCard key={payment.id} payment={payment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
