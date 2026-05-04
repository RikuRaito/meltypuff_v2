"use client";
import { useState, useEffect } from "react";
import { CartItem } from "@/src/types/CartItem";
import { getNonProductsById } from "@/lib/api/products";

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

  const handleChangeQty = (
    itemId: number,
    itemType: string,
    newQty: number,
  ) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId, itemType);
      return;
    }
    try {
      const cartRaw = window.localStorage.getItem("meltypuff_cart");
      if (!cartRaw) return;
      const cartArray: CartItem[] = JSON.parse(cartRaw);
      const targetItem = cartArray.find(
        (item) => item.id === itemId && item.type === itemType,
      );
      if (targetItem) {
        targetItem.qty = newQty;
        localStorage.setItem("meltypuff_cart", JSON.stringify(cartArray));
        window.dispatchEvent(new Event("cartUpdated"));
      }
    } catch (error) {
      console.error("数量の更新に失敗しました:", error);
    }
  };

  const handleRemoveItem = (itemId: number, itemType: string) => {
    try {
      const cartRaw = window.localStorage.getItem("meltypuff_cart");
      if (!cartRaw) return;
      const cartArray: CartItem[] = JSON.parse(cartRaw);
      const filteredArray = cartArray.filter(
        (item) => !(item.id === itemId && item.type === itemType),
      );
      localStorage.setItem("meltypuff_cart", JSON.stringify(filteredArray));
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("アイテムの削除に失敗しました:", error);
    }
  };

  useEffect(() => {
    if (carts.length === 0) return;

    const fetchData = async () => {
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
      console.log("productData:", productsData);
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
