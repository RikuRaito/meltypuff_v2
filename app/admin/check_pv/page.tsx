import { auth } from "@/auth";
import { getDailyPvData } from "@/lib/actions/pv";
import { PvGraph } from "@/src/components/admin/PvGraph";
import { redirect } from "next/navigation";

export default async function CheckPv() {
  const session = await auth();
  if (!session) {
    redirect("/admin/login");
  }
  const allPvData = await getDailyPvData();

  return (
    <div className="min-h-screen bg-gray-50 pt-15 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">PV数確認</h1>
        <PvGraph pvData={allPvData.data} />
      </div>
    </div>
  );
}
