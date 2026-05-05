"use client";
import { PaymentWithItems } from "@/lib/actions/payments";
import { useState } from "react";
import { updatePaymentStatus } from "@/lib/actions/updatePaymentStatus";
import { useRouter } from "next/navigation";

type PaymentCardProps = {
  payment: PaymentWithItems;
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

export default function PaymentCard({ payment }: PaymentCardProps) {
  const [changeStatusConfirmation, setChangeStatusConfirmation] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChangeStatus = async (uuid: string) => {
    setIsLoading(true);
    try {
      const res = await updatePaymentStatus(uuid);
      if (res.success === true) {
        router.refresh();
      }
    } catch (err) {
      console.error("ステータス変更中にエラーが発生しました", err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-gray-400 mb-1">注文ID: {payment.id}</p>
          <p className="text-xs text-gray-400 mb-1">UUID: {payment.uuid}</p>
          <p className="font-bold text-gray-900 text-lg">{payment.name}</p>
          <p className="text-sm text-gray-500">{payment.email}</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor[payment.status] ?? "bg-gray-100 text-gray-800"}`}
          >
            {statusLabel[payment.status] ?? payment.status}
          </span>
          {payment.status === "COMPLETED" && (
            <button
              className="border border-gray-300 text-black text-sm font-semibold rounded-full px-3 py-1 hover:bg-gray-300"
              onClick={() => setChangeStatusConfirmation(true)}
            >
              発送済みにする
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
        <p>
          <span className="font-medium">電話:</span> {payment.phone}
        </p>
        <p>
          <span className="font-medium">合計:</span> ¥
          {payment.price.toLocaleString()}
        </p>
        <p>
          <span className="font-medium">郵便番号:</span> {payment.zipCode}
        </p>
        <p>
          <span className="font-medium">注文日:</span>{" "}
          {new Date(payment.createdAt).toLocaleDateString("ja-JP")}
        </p>
        <p className="col-span-2">
          <span className="font-medium">住所:</span> {payment.address1}{" "}
          {payment.address2}
        </p>
      </div>

      {payment.items.length > 0 && (
        <div className="border-t pt-4">
          <p className="font-medium text-gray-700 mb-2">注文商品</p>
          <ul className="flex flex-col gap-1">
            {payment.items.map((item) => (
              <li
                key={item.id}
                className="text-sm text-gray-600"
              >
                {item.displayName} × {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}

      {changeStatusConfirmation && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setChangeStatusConfirmation(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl p-6 shadow-xl text-center">
            <p className="text-black font-bold text-lg mb-2">
              ステータスを変更しますか？
            </p>
            <p className="text-black font-bold mb-3 text-lg">
              「{payment.uuid}」の注文を発送済みにします
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setChangeStatusConfirmation(false)}
                className="border border-gray-300 text-gray-600 px-6 py-2 rounded-full font-semibold"
              >
                キャンセル
              </button>
              <button
                className="bg-[#b43353] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#9a2a45]"
                onClick={() => handleChangeStatus(payment.uuid)}
                disabled={isLoading}
              >
                {isLoading ? "処理中..." : "確定"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
