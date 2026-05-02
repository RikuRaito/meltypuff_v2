import { getNonProductsById } from "@/lib/api/products";
import ImageCarousel from "@/src/components/shop/ImageCarousel";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productDetail = await getNonProductsById(Number(id));
  console.log("productImages: ", productDetail?.imagePath);

  return (
    <main className="pt-30 w-[90%] sm:w-[92%] max-w-6xl mx-auto">
      <div className="mb-5">
        <p className="text-xl sm:text-2xl text-black font-semibold ">
          商品詳細
        </p>
      </div>
      <div className="flex flex-row gap-6">
        {productDetail && <ImageCarousel images={productDetail.imagePath} />}
        <div className="flex flex-col justify-between pt-4 pb-6">
          <p className="text-black font-bold text-xl">
            {productDetail?.displayName}
          </p>
          <p className="text-black font-bold text-xl">
            ¥{productDetail?.price}
          </p>
        </div>
      </div>
    </main>
  );
}
