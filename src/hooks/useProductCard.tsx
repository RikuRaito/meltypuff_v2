import { CartItem } from "../types/CartItem";

export const useProductCard = () => {
  const handleAddToCart = (productId: number, qty: number) => {
    const cartRaw = localStorage.getItem("meltypuff_cart");
    const cartArray: CartItem[] = cartRaw ? JSON.parse(cartRaw) : [];
    const existingItem = cartArray.find(
      (item) => item.id === productId && item.type === "non",
    );

    if (existingItem) {
      existingItem.qty += qty;
    } else {
      cartArray.push({ id: productId, qty: qty, type: "non" });
    }
    localStorage.setItem("meltypuff_cart", JSON.stringify(cartArray));
    window.dispatchEvent(new Event("cartUpdated"));
  };
  return { handleAddToCart };
};
