"use client";
import { PaymentFilter } from "@/lib/api/payments";
import { useRouter, useSearchParams } from "next/navigation";

const FILTER_LABELS: Record<PaymentFilter, string> = {
  ALL: "すべて",
  COMPLETED: "未発送",
  SHIPPED: "発送済み",
  FAILED: "失敗",
};

export const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = (searchParams.get("status") ?? "ALL") as PaymentFilter;

  const handleFilter = (status: PaymentFilter) => {
    router.push(`/admin/payments?status=${status}`);
  };

  return (
    <div className="flex gap-2 flex-wrap mb-6">
      {(Object.keys(FILTER_LABELS) as PaymentFilter[]).map((status) => (
        <button
          key={status}
          onClick={() => handleFilter(status)}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
            current === status
              ? "bg-[#b43353] text-white border-[#b43353]"
              : "border-gray-300 text-gray-600 hover:bg-gray-100"
          }`}
        >
          {FILTER_LABELS[status]}
        </button>
      ))}
    </div>
  );
};
