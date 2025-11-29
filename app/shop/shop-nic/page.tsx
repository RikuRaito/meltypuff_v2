import ShopNicServer from "@/src/feature/shopNic/server/ShopNicServer";
import ProductList from "@/src/feature/shopNic/components/ProductList";

export default async function ShopNic() {
  // Server Componentでデータを取得
  const products = await ShopNicServer();

  return (
    <main className="pt-30 w-full px-4 md:px-30">
      <ProductList products={products} />
    </main>
  );
}
