import { Coupon, CouponType } from "@prisma/client";

export const CouponCard = ({ coupon }: { coupon: Coupon }) => {
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
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            coupon.isActive
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {coupon.isActive ? "有効" : "無効"}
        </span>
      </div>
    </div>
  );
};
