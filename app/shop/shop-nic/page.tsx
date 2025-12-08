import { getNicProductsInStock } from "@/lib/api/products";
import ProductList from "@/src/feature/shopNic/components/ProductList";

export default async function ShopNic() {
  const products = await getNicProductsInStock();

  return (
    <main className="pt-30 w-full px-4 md:px-30">
      <ProductList products={products} />
    </main>
  );
}
