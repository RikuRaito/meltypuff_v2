import { CartItem } from "../types/CartItem";
import { useState } from "react";

export const useProductCard = () => {
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const handleAddToCart = (productId: number, qty: number) => {
    const cartRaw = localStorage.getItem("meltypuff_cart");
    const cartArray: CartItem[] = cartRaw ? JSON.parse(cartRaw) : [];
    const existingItem = cartArray.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.qty += qty;
    } else {
      cartArray.push({ id: productId, qty: qty });
    }
    localStorage.setItem("meltypuff_cart", JSON.stringify(cartArray));
    window.dispatchEvent(new Event("cartUpdated"));
    setIsAddedToCart(true);
  };

  return { handleAddToCart, isAddedToCart, setIsAddedToCart };
};
