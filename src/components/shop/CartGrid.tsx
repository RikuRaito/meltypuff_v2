"use client";
import Image from "next/image";
import { QtySelect } from "../common/QtySelect";

interface CartGridProps {
  productId: number;
  displayName: string;
  productImage: string;
  price: string;
  qty: number;
  handleItemRemove: (itemId: number) => void;
}

export const CartGrid = ({
  productId,
  displayName,
  productImage,
  price,
  qty,
  handleItemRemove,
}: CartGridProps) => {
  const handleQtyChange = (newQty: number) => {
    const cartRaw = localStorage.getItem("meltypuff_cart");
    if (!cartRaw) return;
    const cartArray = JSON.parse(cartRaw);
    const target = cartArray.find(
      (item: { id: number }) => item.id === productId,
    );
    if (target) {
      target.qty = newQty;
      localStorage.setItem("meltypuff_cart", JSON.stringify(cartArray));
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };

  return (
    <div className="flex flex-row gap-4 py-3 border-b border-gray-200">
      <div className="border border-gray-300 rounded overflow-hidden flex-shrink-0">
        <Image
          src={productImage}
          alt={displayName}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 py-2 flex-1">
        <p className="text-black font-semibold sm:text-xl">{displayName}</p>
        <p className="text-black font-semibold sm:text-xl">¥{price}</p>
      </div>
      <div className="flex flex-col gap-3 ">
        <div>
          <QtySelect
            qty={qty}
            onChange={handleQtyChange}
          />
        </div>
        <div>
          <button
            onClick={() => handleItemRemove(productId)}
            className="border border-gray-300 rounded w-full py-2"
          >
            <p className="text-red-500 text-sm font-semibold">削除</p>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
