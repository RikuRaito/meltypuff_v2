import ShopNonServer from "@/src/feature/shopNon/server/ShopNonServer";
import ProductList from "@/src/feature/shopNon/components/ProductList";

export default async function ShopNic() {
  // Server Componentでデータを取得
  const products = await ShopNonServer();

  return (
    <main className="pt-30 w-full px-4 md:px-30">
      <ProductList products={products} />
    </main>
  );
}
