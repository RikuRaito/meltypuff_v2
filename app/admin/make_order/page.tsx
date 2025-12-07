import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { MakeOrderServer } from "@/src/feature/admin/make_order/MakeOrderServer";
import { RegularList } from "@/src/feature/admin/make_order/RegularList";

export default async function MakeOrder() {
  const session = await auth();
  if (!session) {
    redirect("/admin/login");
  }

  const list = await MakeOrderServer();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <RegularList customers={list} />
    </div>
  );
}
