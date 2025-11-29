import ShopNicServer from "./ShopNicServer";
import ProductList from "./ProductList";

export default async function ShopNic() {
  // Server Componentでデータを取得
  const products = await ShopNicServer();

  return (
    <main className="pt-30 pl-45">
      <ProductList products={products} />
    </main>
  );
}
