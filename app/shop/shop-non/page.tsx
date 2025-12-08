import { getNonProductsInStock } from "@/lib/api/products";
import ProductList from "@/src/feature/shopNon/components/ProductList";

export default async function ShopNon() {
  const products = await getNonProductsInStock();

  return (
    <main className="pt-30 w-full px-4 md:px-30">
      <ProductList products={products} />
    </main>
  );
}
