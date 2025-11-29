"use client";

import { useEffect, useState } from "react";

type ApiProduct = {
  id: number;
  recommend: number;
  image_path: string;
  product_name: string;
  price: number;
};

type Product = {
  id: number;
  recommend: number;
  imagePath: string;
  productName: string;
  price: number;
};

export default function ShopNon() {
  const [products, setProducts] = useState<Product[]>([]);
  const [qty, setQty] = useState<Record<number, number>>({});

  //各商品のidと数量の辞書の初期化と商品データの取得
  useEffect(() => {
    const initQty = (data: Product[]) => {
      const map: Record<number, number> = {};
      for (const product of data) {
        map[product.id] = 1;
      }
      setQty(map);
    };

    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/get_products");
        if (!res.ok) {
          throw new Error("商品データの取得に失敗しました");
        }
        const data: ApiProduct[] = await res.json();
        const normalized: Product[] = data.map((product) => ({
          id: product.id,
          recommend: product.recommend,
          imagePath: product.image_path,
          productName: product.product_name,
          price: product.price,
        }));
        setProducts(normalized);
        initQty(normalized);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchProducts();
  }, []);

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
    <main className="pt-30 pl-45">
      <section className="">
        <h1 className="text-left text-3xl font-bold text-black">
          ノンニコチンベイプ一覧
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
    </main>
  );
}
