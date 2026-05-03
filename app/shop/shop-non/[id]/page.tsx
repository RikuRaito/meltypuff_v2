import { getNonProductsById } from "@/lib/api/products";
import ImageCarousel from "@/src/components/shop/ImageCarousel";
import ProductDetailActions from "@/src/components/shop/ProductDetailActions";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productDetail = await getNonProductsById(Number(id));

  return (
    <main className="pt-30 w-[90%] sm:w-[92%] max-w-6xl mx-auto pb-16">
      <h1 className="text-2xl text-black mb-6 font-bold">商品詳細</h1>
      <div className="flex flex-row gap-4 sm:gap-8">
        {productDetail && <ImageCarousel images={productDetail.imagePath} />}
        <div className="flex flex-col gap-2 sm:gap-4 flex-1">
          <h1 className="text-xl sm:text-3xl text-black font-bold">
            {productDetail?.displayName}
          </h1>
          <p className="text-lg sm:text-2xl text-black font-bold">
            ¥{productDetail?.price.toLocaleString()}
          </p>
          <hr className="border-gray-200 hidden sm:block" />
          {/* PC時のみ表示 */}
          <p className="hidden sm:block text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
            {productDetail?.description}
          </p>
          {productDetail && <ProductDetailActions product={productDetail} />}
        </div>
      </div>
      {/* スマホ時のみ表示 */}
      <p className="block sm:hidden text-xs text-gray-600 leading-snug whitespace-pre-wrap mt-4">
        {productDetail?.description}
      </p>
    </main>
  );
}
