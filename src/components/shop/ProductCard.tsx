"use client";
import { Product_Non } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { useProductCard } from "@/src/hooks/useProductCard";

interface ProductCardProps {
  product: Product_Non;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [qty, setQty] = useState<number>(1);
  const [isQtyChangeOpen, setIsQtyChangeOpen] = useState<boolean>(false);
  const { handleAddToCart, isAddedToCart, setIsAddedToCart } = useProductCard();

  return (
    <div className="w-32 sm:w-[250px] relative border border-gray-600 rounded-lg pb-3 ">
      <div className="relative w-full aspect-square mb-3 overflow-hidden">
        <Image
          src={product.imagePath[0]}
          alt={product.displayName}
          fill
          className="object-contain"
        />
      </div>
      <div className="mb-3">
        <p className="text-sm sm:text-xl text-black px-3 font-semibold">
          {product.displayName}
        </p>
        <p className="text-sm sm:text-xl text-black font-semibold px-3">
          ¥{product.price}
        </p>
      </div>
      <div className="sm:px-2 flex sm:gap-2 px-3 gap-4 ">
        <button
          onClick={() => setIsQtyChangeOpen(true)}
          className="px-3 py-1 border border-gray-300 rounded "
        >
          <p className="text-black font-semibold sm:text-base text-xs">
            <span className="sm:hidden">{qty}</span>
            <span className="hidden sm:inline">数量：{qty}</span>
          </p>
        </button>
        {isQtyChangeOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-10"
              onClick={() => setIsQtyChangeOpen(false)}
            />
            <ul className="absolute z-20 top-0 left-10 mb-1 w-24 bg-white border border-gray-300 rounded shadow-xl">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <li
                  key={n}
                  onClick={() => {
                    setQty(n);
                    setIsQtyChangeOpen(false);
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
          className=" px-2 rounded text-white bg-[#d1505c] hover:bg-[#a33845]"
          onClick={() => handleAddToCart(product.id, qty)}
        >
          <p className="text-xs sm:text-xl font-semibold">
            <span className="sm:hidden">カート</span>
            <span className="hidden sm:inline">カートに追加</span>
          </p>
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
            <p className="text-black font-semibold sm:text-lg text-sm whitespace-nowrap">
              カートに追加されました
            </p>
          </div>
        </>
      )}
    </div>
  );
}
