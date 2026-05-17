import { getNonProductsInStock } from "@/lib/api/products";
import ProductCard from "@/src/components/shop/ProductCard";
import { getShippingFee } from "@/lib/actions/shippingFee";
import { ShippingFeeModal } from "@/src/components/admin/ShippingFeeModal";

export default async function ShopNon() {
  const products = await getNonProductsInStock();
  const shippingFee = await getShippingFee();

  return (
    <main className="pt-30 w-[72%] sm:w-[92%] max-w-6xl mx-auto ">
      <h1 className="text-2xl text-black font-bold mb-2">商品一覧</h1>

      <p className="text-black mb-6 font-semibold text-base">
        送料は¥{shippingFee.fee?.fee}となります
      </p>
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-10">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
          />
        ))}
      </div>
    </main>
  );
}
