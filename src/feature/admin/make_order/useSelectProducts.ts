"use client";
import { useState } from "react";
import { Product_Nic } from "@prisma/client";

// 注文アイテムの型
export type OrderItem = {
  product: Product_Nic;
  quantity: number;
};

export const useSelectProducts = () => {
  // 商品ID：個数
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  // 注文リスト
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  // 個数を変更
  const handleQuantityChange = (productId: number, value: number) => {
    if (value < 1) return;
    setQuantities((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  // 注文に追加
  const addToOrder = (product: Product_Nic) => {
    const quantity = quantities[product.id] || 1;

    setOrderItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);

      if (existing) {
        // 既存の場合は個数を加算
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // 新規追加
      return [...prev, { product, quantity }];
    });

    // 選択個数をリセット
    setQuantities((prev) => ({
      ...prev,
      [product.id]: 1,
    }));
  };

  // 注文から削除
  const removeFromOrder = (productId: number) => {
    setOrderItems((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
  };

  // 注文アイテムの個数を変更
  const updateOrderQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromOrder(productId);
      return;
    }

    setOrderItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // 合計金額を計算
  const totalPrice = orderItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // 注文をクリア
  const clearOrder = () => {
    setOrderItems([]);
    setQuantities({});
  };

  return {
    quantities,
    orderItems,
    totalPrice,
    handleQuantityChange,
    addToOrder,
    removeFromOrder,
    updateOrderQuantity,
    clearOrder,
  };
};
