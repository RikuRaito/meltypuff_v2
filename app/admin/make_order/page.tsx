import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getRegularCostomer } from "@/lib/api/regularCostomer";

export default async function MakeOrder() {
  const session = await auth();
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">注文作成</h1>
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-gray-600">注文作成機能はここに実装します</p>
        </div>
      </div>
    </div>
  );
}
