import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getRegularCustomer } from "@/lib/api/regularCustomer";
import { MakeOrder } from "@/src/components/admin/MakeOrder";

// TODO: issue #21 ニコチン商品削除時にこのページごと削除を検討する
export default async function MakeOrderPage() {
  const session = await auth();
  if (!session) {
    redirect("/admin/login");
  }

  const customersList = await getRegularCustomer();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <MakeOrder customers={customersList} products={[]} />
    </div>
  );
}
