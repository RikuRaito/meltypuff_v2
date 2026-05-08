"use client";
import { Coupon, CouponType } from "@prisma/client";
import { useState } from "react";
import { ChangeActiveCoupon } from "@/lib/actions/coupons";
import { useRouter } from "next/navigation";

export const CouponCard = ({ coupon }: { coupon: Coupon }) => {
  const [isChangeActiveOpen, setIsChangeActiveOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChangeActive = async () => {
    setIsLoading(true);
    try {
      await ChangeActiveCoupon(coupon.code);
      setIsChangeActiveOpen(false);
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  if (isChangeActiveOpen) {
    return (
      <>
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsChangeActiveOpen(false)}
        />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl p-6 shadow-xl text-center w-[90%] max-w-sm">
          <p className="text-black font-bold text-lg mb-2">
            ステータスを変更しますか？
          </p>
          <p className="text-gray-500 text-sm mb-6">
            「{coupon.code}」を{coupon.isActive ? "無効" : "有効"}にします
          </p>
          <div className="flex justify-between">
            <button
              onClick={() => setIsChangeActiveOpen(false)}
              className="border border-gray-300 text-gray-600 px-6 py-2 rounded-full font-semibold"
            >
              キャンセル
            </button>
            <button
              onClick={handleChangeActive}
              disabled={isLoading}
              className="bg-[#b43353] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#9a2a45] disabled:bg-gray-400"
            >
              {isLoading ? "処理中..." : "確定"}
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 mb-1">ID: {coupon.id}</p>
          <p className="font-bold text-gray-900 text-lg">{coupon.code}</p>
          <p className="text-sm text-gray-500">
            {coupon.type === CouponType.PERCENT_OFF
              ? `${coupon.discountRate}%OFF`
              : `¥${coupon.discountRate}OFF`}
          </p>
        </div>
        <div className="flex flex-col justify-between gap-4  items-center ">
          <span
            className={`px-3 py-1 rounded-full w-fit text-sm font-semibold ${
              coupon.isActive
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {coupon.isActive ? "有効" : "無効"}
          </span>
          <button
            className="text-black border border-gray-300 text-sm rounded-full font-semibold px-3 py-1"
            onClick={() => setIsChangeActiveOpen(true)}
          >
            {coupon.isActive ? "無効にする" : "有効にする"}
          </button>
        </div>
      </div>
    </div>
  );
};
