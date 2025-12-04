"use client";
import { useState, useEffect } from "react";
import { CartItem } from "@/src/types/product";
import { applyCoupon } from "@/lib/api/purchase";
import { Payment } from "../types/payments";

export const useCart = () => {
  const [carts, setCarts] = useState<CartItem[]>([]);
  const [discountRate, setDiscountRate] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isApplyedCoupon, setIsApplyedCoupon] = useState(false);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [couponCode, setCouponCode] = useState("");

  const loadCartData = () => {
    try {
      const cartRaw = window.localStorage.getItem("meltypuff_cart");
      if (!cartRaw) {
        setCarts([]);
        return;
      }

      const parsed = JSON.parse(cartRaw);
      const itemsInCart: CartItem[] = Array.isArray(parsed) ? parsed : [];
      setCarts(itemsInCart);
    } catch (error) {
      console.error("カートデータの読み込みに失敗しました:", error);
      setCarts([]);
    }
  };

  // カートデータの読み込み
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

  // カート内容が変更された時に合計金額を再計算
  useEffect(() => {
    const total = carts.reduce((sum, item) => {
      return sum + (item.price || 0) * (item.qty || 0);
    }, 0);
    setTotalPrice(total);
  }, [carts]);

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
    e.preventDefault();

    // 既にクーポンが適用されている場合は処理を中断
    if (isApplyedCoupon) {
      alert("クーポンは既に適用されています");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const couponCode = formData.get("coupon") as string;

    if (!couponCode) {
      alert("クーポンコードを入力してください");
      return;
    }

    try {
      const result = await applyCoupon(couponCode);

      if (result.success && result.coupon) {
        // クーポン適用後の価格を計算
        const newDiscountRate = result.coupon.finalPriceRate;
        setDiscountRate(newDiscountRate);
        alert("クーポンが適用されました");
        setIsApplyedCoupon(true);
        setCouponCode(couponCode);
      } else {
        alert(result.error || "クーポンの適用に失敗しました");
      }
    } catch (error) {
      console.error("クーポン適用中にエラーが発生しました:", error);
      alert("クーポン適用中にエラーが発生しました");
    }
  };

  const handleCheckout = async () => {
    if (carts.length === 0) {
      alert("カートに商品がありません");
      return;
    }

    setIsProcessing(true);

    try {
      // TODO: Square決済処理をここに実装
      // 例: const result = await processSquarePayment(carts, totalPrice * discountRate);

      // 決済処理のシミュレーション（実際の決済処理に置き換える）
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2秒待機

      // 決済成功時の処理
      setIsPaymentCompleted(true);

      // カートをクリア
      localStorage.removeItem("meltypuff_cart");
      setCarts([]);
      setDiscountRate(1);
      setIsApplyedCoupon(false);

      // カスタムイベントを発火してヘッダーのカート数を更新
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("決済処理中にエラーが発生しました:", error);
      alert("決済処理に失敗しました。もう一度お試しください。");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClosePaymentComplete = () => {
    setIsPaymentCompleted(false);
  };

  return {
    carts,
    discountRate,
    totalPrice,
    isApplyedCoupon,
    isPaymentCompleted,
    isProcessing,
    handleChangeQty,
    handleRemoveItem,
    handleApplyCoupon,
    handleCheckout,
    handleClosePaymentComplete,
  };
};
