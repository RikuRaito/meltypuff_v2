import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getRegularCustomer } from "@/lib/api/regularCustomer";
import { getNicProductsInStock } from "@/lib/api/products";
import { MakeOrder } from "@/src/feature/admin/make_order/MakeOrder";

export default async function MakeOrderPage() {
  const session = await auth();
  if (!session) {
    redirect("/admin/login");
  }

  const customersList = await getRegularCustomer();
  const productsList = await getNicProductsInStock();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <MakeOrder customers={customersList} products={productsList} />
    </div>
  );
}
