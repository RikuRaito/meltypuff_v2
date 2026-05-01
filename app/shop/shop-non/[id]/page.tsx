import { getNonProductsById } from "@/lib/api/products";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productDetail = await getNonProductsById(Number(id));

  return (
    <main className="pt-30 w-[72%] sm:w-[92%] max-w-6xl mx-auto">
      <div>
        <p className="sm:text-2xl text-black sm:font-semibold">商品詳細</p>
      </div>
      <div></div>
    </main>
  );
}
