import { getAllCoupons } from "@/lib/actions/coupons";
import { AddCouponModal } from "@/src/components/admin/AddCouponModal";
import { CouponCard } from "@/src/components/admin/CouponCard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ManageCoupons() {
  const session = await auth();
  if (!session) {
    redirect("/admin/login");
  }

  const { data: coupons } = await getAllCoupons();

  return (
    <div className="min-h-screen bg-gray-50 pt-15 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            クーポン管理
          </h1>
          <AddCouponModal />
        </div>

        {coupons.length === 0 ? (
          <div className="rounded-lg bg-white p-8 text-center shadow">
            <p className="text-gray-500">クーポンがありません</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {coupons.map((coupon) => (
              <CouponCard
                key={coupon.id}
                coupon={coupon}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
