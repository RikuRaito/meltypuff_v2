import { getNonProductsInStock } from "@/lib/api/products";
import ProductCard from "@/src/components/shop/ProductCard";

export default async function ShopNon() {
    const products = await getNonProductsInStock();

    return (
        <main className="pt-30 w-[92%] max-w-6xl mx-auto ">
            <h1 className="text-2xl text-black font-bold mb-5">商品一覧</h1>
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-10">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>

        </main>
    );
}
