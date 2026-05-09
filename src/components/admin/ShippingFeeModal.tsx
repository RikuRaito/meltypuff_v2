"use client";
import { useShippingFee } from "@/src/hooks/admin/useShippingFee";
import { updateShippingFee } from "@/lib/actions/shippingFee";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ShippingFeeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFee, setNewFee] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { shippingFee } = useShippingFee();
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await updateShippingFee(Number(newFee));
    if (res.success) {
      setIsModalOpen(false);
      setIsSuccess(true);
    }
  };

  if (isModalOpen && !isSuccess) {
    return (
      <>
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsModalOpen(false)}
        />
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-black font-bold text-lg mb-4">送料の変更</p>
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1 text-black text-sm">
              新しい送料（円）
              <input
                type="number"
                value={newFee}
                onChange={(e) => setNewFee(e.target.value)}
                placeholder={String(shippingFee)}
                className="rounded border px-3 py-2 text-black"
              />
            </label>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="border border-gray-300 text-gray-600 px-6 py-2 rounded-full font-semibold"
              >
                キャンセル
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#b43353] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#9a2a45]"
              >
                確定
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (isSuccess) {
    return (
      <>
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => {
            setIsSuccess(false);
            router.refresh();
          }}
        />
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl p-6 shadow-xl text-center w-[90%] max-w-sm"
          onClick={() => {
            setIsSuccess(false);
            router.refresh();
          }}
        >
          <p className="text-black font-bold text-lg">送料を変更しました</p>
        </div>
      </>
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 mb-1">現在の送料</p>
          <p className="font-bold text-gray-900 text-lg">
            ¥{shippingFee.toLocaleString()}
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="border border-gray-300 text-black text-sm font-semibold rounded-full px-3 py-1 hover:bg-gray-100"
        >
          変更する
        </button>
      </div>
    </div>
  );
};
