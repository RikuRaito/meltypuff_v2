"use client";
import { useState } from "react";
import { CouponType, Prisma } from "@prisma/client";
import { AddNewCoupon } from "@/lib/actions/coupons";
import { useRouter } from "next/navigation";

export const AddCouponModal = () => {
  //モーダル開閉state
  const [isOpen, setIsOpen] = useState(false);
  //発行処理完了後の通知モーダルstate
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const code = formData.get("code") as string;
    const type = formData.get("type") as CouponType;
    const discountRate = Number(formData.get("discountRate"));
    const data: Prisma.CouponCreateInput = {
      code,
      type,
      discountRate,
      isActive: true,
    };

    const res = await AddNewCoupon(data);
    if (res.success) {
      setIsOpen(false);
      setIsSuccess(true);
      router.refresh();
    }
  };

  if (isOpen) {
    return (
      <>
        <div className="fixed inset-0 bg-black/50 z-40" />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-sm">
          <p className="text-black font-bold text-lg mb-4">新規クーポン発行</p>
          <form
            className="flex flex-col gap-4"
            action={handleSubmit}
          >
            <label className="flex flex-col gap-1 text-black text-sm">
              クーポンコード
              <input
                name="code"
                type="text"
                className="rounded border px-3 py-2"
                required
              />
            </label>
            <label className="flex flex-col gap-1 text-black text-sm">
              割引タイプ
              <select
                name="type"
                className="rounded border px-3 py-2 text-black"
              >
                <option value="PERCENT_OFF">%OFF</option>
                <option value="AMOUNT_OFF">円OFF</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 text-black text-sm">
              割引率
              <input
                name="discountRate"
                type="number"
                className="rounded border px-3 py-2"
                required
              />
            </label>
            <div className="flex justify-between mt-2">
              <button
                type="button"
                className="border border-gray-300 text-gray-600 px-4 py-2 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                キャンセル
              </button>
              <button
                type="submit"
                className="bg-[#b43353] text-white px-4 py-2 rounded-full hover:bg-[#9a2a45]"
              >
                確定
              </button>
            </div>
          </form>
        </div>
      </>
    );
  } else if (!isOpen && isSuccess) {
    return (
      <>
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSuccess(false)}
        />
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl p-6 shadow-xl text-center w-[90%] max-w-sm"
          onClick={() => setIsSuccess(false)}
        >
          <p className="text-black font-bold text-lg">クーポンを発行しました</p>
        </div>
      </>
    );
  }

  return (
    <div>
      <button
        className="text-black border border-gray-300 rounded-full text-lg font-semibold px-3 py-2"
        onClick={() => setIsOpen(true)}
      >
        新規クーポン発行
      </button>
    </div>
  );
};
