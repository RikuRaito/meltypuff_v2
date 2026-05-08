"use client";
import { Coupon, CouponType } from "@prisma/client";
import { useState } from "react";

export const CouponCard = ({ coupon }: { coupon: Coupon }) => {
  const [isChangeActiveOpen, setIsChangeActiveOpen] = useState(false);

  if (isChangeActiveOpen) {
    return (
      <>
        <div className="fixed" />
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
