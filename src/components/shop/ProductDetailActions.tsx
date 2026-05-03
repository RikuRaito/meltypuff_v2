"use client";
import { useState } from "react";
import { useProductCard } from "@/src/hooks/useProductCard";
import { Product_Non } from "@prisma/client";

interface Props {
  product: Product_Non;
}

export default function ProductDetailActions({ product }: Props) {
  const [qty, setQty] = useState(1);
  const [isQtyOpen, setIsQtyOpen] = useState(false);
  const { handleAddToCart, isAddedToCart, setIsAddedToCart } = useProductCard();

  return (
    <div className="flex flex-col gap-4 sm:mt-auto">
      <hr className="border-gray-200" />
      <div className="relative flex flex-col sm:flex-row gap-2 sm:gap-3 sm:items-center">
        <button
          onClick={() => setIsQtyOpen(true)}
          className="w-full sm:w-auto sm:px-4 px-3 py-2 border border-gray-300 rounded text-black font-semibold"
        >
          数量：{qty}
        </button>
        {isQtyOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-10"
              onClick={() => setIsQtyOpen(false)}
            />
            <ul className="absolute bottom-full mb-1 z-20 w-24 bg-white border border-gray-300 rounded shadow-xl">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <li
                  key={n}
                  onClick={() => {
                    setQty(n);
                    setIsQtyOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                >
                  {n}
                </li>
              ))}
            </ul>
          </>
        )}
        <button
          onClick={() => handleAddToCart(product.id, qty)}
          className="w-full sm:flex-1 py-2 px-3 bg-[#d1505c] hover:bg-[#a33845] text-white font-bold rounded"
        >
          カートに追加
        </button>
      </div>
      {isAddedToCart && (
        <>
          <div
            className="fixed inset-0 bg-white/60 backdrop-blur-sm z-40"
            onClick={() => setIsAddedToCart(false)}
          />
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white border border-gray-200 rounded-xl shadow-xl px-8 py-6 text-center"
            onClick={() => setIsAddedToCart(false)}
          >
            <p className="text-black font-semibold text-lg whitespace-nowrap">
              カートに追加されました
            </p>
          </div>
        </>
      )}
    </div>
  );
}
