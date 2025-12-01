"use client";
import { useState, useEffect } from "react";
import { CartItem } from "@/src/types/product";

export default function Cart() {
  const [carts, setCarts] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const loadCartData = () => {
    try {
      const cartRaw = window.localStorage.getItem("meltypuff_cart");
      if (!cartRaw) {
        setCarts([]);
        setTotalPrice(0);
        return;
      }

      const parsed = JSON.parse(cartRaw);
      const itemsInCart: CartItem[] = Array.isArray(parsed) ? parsed : [];
      setCarts(itemsInCart);

      // カート内の合計金額を計算（単価 × 数量の合計）
      const total = itemsInCart.reduce((sum, item) => {
        return sum + (item.price || 0) * (item.qty || 0);
      }, 0);
      setTotalPrice(total);
    } catch (error) {
      console.error("カートデータの読み込みに失敗しました:", error);
      setCarts([]);
      setTotalPrice(0);
    }
  };

  useEffect(() => {
    loadCartData();

    // カスタムイベントでカート更新を検知
    const handleCartUpdate = () => {
      loadCartData();
    };

    // 他のタブやウィンドウでlocalStorageが変更された時に更新
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "meltypuff_cart") {
        loadCartData();
      }
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const handleChangeQty = (
    itemId: number,
    itemType: string,
    newQty: number
  ) => {
    // 数量が0以下の場合は削除
    if (newQty <= 0) {
      handleRemoveItem(itemId, itemType);
      return;
    }

    try {
      const cartRaw = window.localStorage.getItem("meltypuff_cart");
      if (!cartRaw) return;

      const parsed = JSON.parse(cartRaw);
      const cartArray: CartItem[] = Array.isArray(parsed) ? parsed : [];

      // findで該当アイテムを探して数量を更新
      const targetItem = cartArray.find(
        (item) => item.id === itemId && item.type === itemType
      );

      if (targetItem) {
        targetItem.qty = newQty;
        localStorage.setItem("meltypuff_cart", JSON.stringify(cartArray));

        // カスタムイベントを発火してヘッダーのカート数を更新
        window.dispatchEvent(new Event("cartUpdated"));

        // ローカルステートも更新
        loadCartData();
      }
    } catch (error) {
      console.error("数量の更新に失敗しました:", error);
    }
  };

  const handleRemoveItem = (itemId: number, itemType: string) => {
    try {
      const cartRaw = window.localStorage.getItem("meltypuff_cart");
      if (!cartRaw) return;

      const parsed = JSON.parse(cartRaw);
      const cartArray: CartItem[] = Array.isArray(parsed) ? parsed : [];

      // 該当アイテムを削除
      const filteredArray = cartArray.filter(
        (item) => !(item.id === itemId && item.type === itemType)
      );

      localStorage.setItem("meltypuff_cart", JSON.stringify(filteredArray));

      // カスタムイベントを発火してヘッダーのカート数を更新
      window.dispatchEvent(new Event("cartUpdated"));

      // ローカルステートも更新
      loadCartData();
    } catch (error) {
      console.error("アイテムの削除に失敗しました:", error);
    }
  };

  const handleApplyCoupon = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトのフォーム送信を防ぐ

    const formData = new FormData(e.currentTarget);
    const couponCode = formData.get("coupon") as string;

    if (!couponCode) {
      alert("クーポンコードを入力してください");
      return;
    }

    try {
      const { applyCoupon } = await import("@/lib/api/purchase");
      const result = await applyCoupon(couponCode);

      if (result.success && result.coupon) {
        // クーポン適用後の価格を計算
        const discountRate = result.coupon.finalPriceRate;
        const discountedPrice = Math.floor(totalPrice * discountRate);
        setTotalPrice(discountedPrice);
        alert("クーポンが適用されました");
        // フォームをリセット
        e.currentTarget.reset();
      } else {
        alert(result.error || "クーポンの適用に失敗しました");
      }
    } catch (error) {
      console.error("クーポン適用中にエラーが発生しました:", error);
      alert("クーポン適用中にエラーが発生しました");
    }
  };

  const handleCheckout = async () => {
    // 後で決済処理のServer Actionを呼び出す予定
    // 例: const result = await processPayment(carts);
    console.log("決済処理を開始します", carts);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-18 w-full px-4 md:px-40 pb-32 flex-1">
        <h1 className="text-black mt-15 mb-7 text-xl font-bold md:text-3xl text-left">
          カート
        </h1>
        <div className="flex flex-col gap-4">
          {carts.length > 0 &&
            carts.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                className="flex flex-row items-center gap-4 p-4 border border-gray-200 rounded-lg"
              >
                <img
                  src={`${item.imagePath}`}
                  className="w-18 h-18 md:w-24 md:h-24 object-cover border rounded"
                />
                <div className="flex-1">
                  <p className="text-black font-semibold">{item.displayName}</p>
                  <p className="text-gray-600">
                    ¥{item.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">数量:</label>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => {
                      const newQty = parseInt(e.target.value, 10);
                      if (!isNaN(newQty)) {
                        handleChangeQty(item.id, item.type, newQty);
                      }
                    }}
                    className="w-16 text-center border border-gray-300 rounded px-2 py-1 text-black"
                  />
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-black font-bold text-lg">
                    ¥{(item.price * item.qty).toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id, item.type)}
                    className="text-sm text-red-500 hover:text-red-700 mt-1"
                  >
                    削除
                  </button>
                </div>
              </div>
            ))}
          <div>
            <h2 className="text-black text-xl md:text-2xl font-bold mt-6 mb-4">
              クーポンコード
            </h2>
            <form className="flex gap-2" onSubmit={handleApplyCoupon}>
              <input
                type="text"
                name="coupon"
                placeholder="クーポンコードを入力"
                className="flex-1 border border-gray-300 rounded px-4 py-2 text-black"
              />
              <button
                type="submit"
                className="bg-[#b43353] text-white rounded px-6 py-2 font-bold hover:bg-[#9a2a45] transition-colors"
              >
                適用
              </button>
            </form>
          </div>
        </div>
        {carts.length === 0 && (
          <div className="text-gray-500 text-center py-10">
            カートに商品がありません。
          </div>
        )}
      </main>

      {/* 画面下部固定の合計料金と支払いボタン */}
      {carts.length > 0 && (
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">合計</span>
                <span className="text-2xl font-bold text-black">
                  ¥{totalPrice.toLocaleString()}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-[#b43353] text-white rounded-full font-bold text-lg px-8 py-3 hover:bg-[#9a2a45] transition-colors whitespace-nowrap"
              >
                支払う
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
