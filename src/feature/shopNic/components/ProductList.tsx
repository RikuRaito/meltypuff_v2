"use client";

import { useEffect, useState } from "react";
import { Product } from "../server/ShopNicServer";

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  const [qty, setQty] = useState<Record<number, number>>({});

  // 各商品のidと数量の辞書の初期化
  useEffect(() => {
    const initQty = (data: Product[]) => {
      const map: Record<number, number> = {};
      for (const product of data) {
        map[product.id] = 1;
      }
      setQty(map);
    };
    initQty(products);
  }, [products]);

  const handleQtyChange = (productId: number, value: string) => {
    const newQty: number = parseInt(value, 10);

    if (newQty <= 0 || isNaN(newQty)) return;
    setQty((prev) => ({
      ...prev,
      [productId]: newQty,
    }));
  };

  const handleAddToCart = (productId: number) => {
    const itemQty: number = qty[productId];
    const payload = { id: productId, qty: itemQty, type: "nic" };

    localStorage.setItem("meltypuff_cart", JSON.stringify(payload));
    console.log(`ID: ${productId}was added to cart. Quantity is ${itemQty}`);
  };

  return (
    <section className="">
      <h1 className="text-left text-3xl font-bold text-black mb-6">
        ニコチンベイプ一覧
      </h1>
      <div className="flex flex-wrap gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm w-[calc(50%-12px)] md:w-[270px]"
          >
            <img src={product.imagePath} className="w-50 mb-2" />
            <p className="font-semibold mb-2 text-black text-center">
              {product.productName}
            </p>
            <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3">
              <input
                type="number"
                className="w-16 text-black text-center border border-black rounded"
                min="1"
                value={qty[product.id] ?? 1}
                onChange={(e) => handleQtyChange(product.id, e.target.value)}
              />
              <button
                className="bg-[#b43353] text-white rounded font-bold text-sm sm:text-0.5xl px-4 py-2 hover:bg-[#9a2a45] transition-colors w-full sm:w-auto"
                onClick={() => handleAddToCart(product.id)}
              >
                カートに追加
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
