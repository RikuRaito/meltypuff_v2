"use client";
import { useState } from "react";
import { applyCoupon } from "@/lib/api/purchase";

type CouponFormProps = {
  totalAmount: number;
  setTotalAmount: (amount: number) => void;
  onCouponApplied: (code: string) => void;
};

export const CouponForm = ({
  totalAmount,
  setTotalAmount,
  onCouponApplied,
}: CouponFormProps) => {
  const [couponCode, setCouponCode] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleApply = async () => {
    if (!couponCode) return;
    const res = await applyCoupon(couponCode);
    if (res.success && res.coupon) {
      const { type, discountRate } = res.coupon;
      let discounted: number = totalAmount;
      if (type === "PERCENT_OFF") {
        discounted = Math.floor(totalAmount * (1 - discountRate / 100));
      } else if (type === "AMOUNT_OFF") {
        discounted = Math.max(0, totalAmount - discountRate);
      }
      setTotalAmount(discounted);
      onCouponApplied(couponCode);
      setMessage(
        type === "PERCENT_OFF"
          ? `${discountRate}%OFFが適用されました`
          : `¥${discountRate}OFFが適用されました`,
      );
      setIsError(false);
    } else {
      setMessage(res.error ?? "クーポンの適用に失敗しました");
      setIsError(true);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="クーポンコード"
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-black text-sm"
        />
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-[#b43353] text-white rounded-full text-sm font-semibold hover:bg-[#9a2a45]"
        >
          適用
        </button>
      </div>
      {message && (
        <p className={`text-sm ${isError ? "text-red-500" : "text-green-600"}`}>
          {message}
        </p>
      )}
    </div>
  );
};
