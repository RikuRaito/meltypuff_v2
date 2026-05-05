"use client";
import { PaymentWithItems } from "@/lib/actions/payments";

type PaymentsListProps = {
  payments: PaymentWithItems[];
};

const statusLabel: Record<string, string> = {
  COMPLETED: "未発送",
  FAILED: "失敗",
  SHIPPED: "発送済み",
};

const statusColor: Record<string, string> = {
  COMPLETED: "bg-yellow-100 text-yellow-800",
  FAILED: "bg-red-100 text-red-800",
  SHIPPED: "bg-blue-100 text-blue-800",
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
    <div className="flex flex-col gap-4">
      {payments.map((payment) => (
        <div key={payment.id} className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">注文ID: {payment.id}</p>
              <p className="text-xs text-gray-400 mb-1">UUID: {payment.uuid}</p>
              <p className="font-bold text-gray-900 text-lg">{payment.name}</p>
              <p className="text-sm text-gray-500">{payment.email}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor[payment.status] ?? "bg-gray-100 text-gray-800"}`}>
              {statusLabel[payment.status] ?? payment.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
            <p><span className="font-medium">電話:</span> {payment.phone}</p>
            <p><span className="font-medium">合計:</span> ¥{payment.price.toLocaleString()}</p>
            <p><span className="font-medium">郵便番号:</span> {payment.zipCode}</p>
            <p><span className="font-medium">注文日:</span> {new Date(payment.createdAt).toLocaleDateString("ja-JP")}</p>
            <p className="col-span-2"><span className="font-medium">住所:</span> {payment.address1} {payment.address2}</p>
          </div>

          {payment.items.length > 0 && (
            <div className="border-t pt-4">
              <p className="font-medium text-gray-700 mb-2">注文商品</p>
              <ul className="flex flex-col gap-1">
                {payment.items.map((item) => (
                  <li key={item.id} className="text-sm text-gray-600">
                    {item.displayName} × {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
