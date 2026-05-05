"use client";
import { useState, useEffect } from "react";
import { CartItem } from "@/src/types/CartItem";

interface CartsWithData {
  id: number;
  qty: number;
  displayName: string;
  image: string;
  price: string;
}

export const useCart = () => {
  const [carts, setCarts] = useState<CartItem[]>([]);
  const [cartsWithData, setCartsWithData] = useState<CartsWithData[]>([]);

  useEffect(() => {
    const loadCartData = () => {
      try {
        const cartRaw = window.localStorage.getItem("meltypuff_cart");
        if (!cartRaw) {
          setCarts([]);
          return;
        }
        const parsed = JSON.parse(cartRaw);
        setCarts(Array.isArray(parsed) ? parsed : []);
      } catch (error) {
        console.error("カートデータの読み込みに失敗しました:", error);
        setCarts([]);
      }
    };

    loadCartData();

    const handleCartUpdate = () => loadCartData();
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "meltypuff_cart") loadCartData();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const handleChangeQty = (itemId: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    try {
      const cartRaw = window.localStorage.getItem("meltypuff_cart");
      if (!cartRaw) return;
      const cartArray: CartItem[] = JSON.parse(cartRaw);
      const targetItem = cartArray.find((item) => item.id === itemId);
      if (targetItem) {
        targetItem.qty = newQty;
        localStorage.setItem("meltypuff_cart", JSON.stringify(cartArray));
        window.dispatchEvent(new Event("cartUpdated"));
      }
    } catch (error) {
      console.error("数量の更新に失敗しました:", error);
    }
  };

  const handleRemoveItem = (itemId: number) => {
    try {
      const cartRaw = window.localStorage.getItem("meltypuff_cart");
      if (!cartRaw) return;
      const cartArray: CartItem[] = JSON.parse(cartRaw);
      const filteredArray = cartArray.filter((item) => item.id !== itemId);
      localStorage.setItem("meltypuff_cart", JSON.stringify(filteredArray));
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("アイテムの削除に失敗しました:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (carts.length === 0) {
        setCartsWithData([]);
        return;
      }
      const productsData: CartsWithData[] = await Promise.all(
        carts.map(async (item) => {
          const res = await fetch(`/api/products/${item.id}`);
          const product = await res.json();
          return {
            id: item.id,
            qty: item.qty,
            displayName: product.displayName,
            image: product.imagePath[0],
            price: product.price,
          };
        }),
      );
      setCartsWithData(productsData);
    };
    fetchData();
  }, [carts]);

  return {
    carts,
    handleChangeQty,
    handleRemoveItem,
    cartsWithData,
  };
};
