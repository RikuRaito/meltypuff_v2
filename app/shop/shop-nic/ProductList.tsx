"use client";

import { useEffect, useState } from "react";

export type Product = {
  id: number;
  recommend: number;
  imagePath: string;
  productName: string;
  price: number;
};

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
      <h1 className="text-left text-3xl font-bold text-black">
        ニコチンベイプ一覧
      </h1>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.productName}</p>
          <input
            type="number"
            className=""
            min="1"
            value={qty[product.id] ?? 1}
            onChange={(e) => handleQtyChange(product.id, e.target.value)}
          />
          <button className="" onClick={() => handleAddToCart(product.id)}>
            カートに追加
          </button>
        </div>
      ))}
    </section>
  );
}
