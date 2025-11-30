"use client";
import { useState, useEffect } from "react";

type Item = {
  id: number;
  qty: number;
  type: string;
  price: number;
  imagePath: string;
};

export default function Cart() {
  const [carts, setCarts] = useState<Item[]>([]);
  const [price, setPrice] = useState<number>();

  useEffect(() => {
    const cartRaw = localStorage.getItem("meltypuff_cart");
    if (cartRaw) {
      try {
        const parsed = JSON.parse(cartRaw);
        const itemsInCart: Item[] = Array.isArray(parsed) ? parsed : [];
        setCarts(itemsInCart);

        // カート内の合計金額を計算（単価 × 数量の合計）
        const totalPrice = itemsInCart.reduce((sum, item) => {
          return sum + item.price * item.qty;
        }, 0);
        setPrice(totalPrice);
      } catch (error) {
        console.error("カートデータの読み込みに失敗しました:", error);
        setCarts([]);
      }
    }
  }, []);

  return (
    <main className="pt-18 w-full px-4 md:px-50">
      <h1 className="text-black mt-15 mb-7 text-xl font-bold md:text-3xl text-left">
        カート
      </h1>
      <div className="flex-row">
        {carts.length > 0 &&
          carts.map((item) => (
            <div key={`${item.type}-${item.id}`} className="flex-col">
              <img src={`${item.imagePath}`} className="w-30" />
            </div>
          ))}
      </div>
      {carts.length === 0 && (
        <div className="text-gray-500 text-center py-10">
          カートに商品がありません。
        </div>
      )}
    </main>
  );
}
