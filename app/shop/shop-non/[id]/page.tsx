import { getNonProductsById } from "@/lib/api/products";
import ImageCarousel from "@/src/components/shop/ImageCarousel";
import { prependListener } from "process";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productDetail = await getNonProductsById(Number(id));
  console.log("productImages: ", productDetail?.imagePath);

  return (
    <main className="pt-30 w-[72%] sm:w-[92%] max-w-6xl mx-auto">
      <div>
        <p className="sm:text-2xl text-black sm:font-semibold">商品詳細</p>
      </div>
      <div>
        {productDetail && <ImageCarousel images={productDetail?.imagePath} />}
      </div>
    </main>
  );
}
