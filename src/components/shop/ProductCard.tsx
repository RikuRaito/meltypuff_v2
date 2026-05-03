"use client";
import { Product_Non } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { useProductCard } from "@/src/hooks/useProductCard";
import Link from "next/link";
import { QtySelect } from "@/src/components/common/QtySelect";

interface ProductCardProps {
  product: Product_Non;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [qty, setQty] = useState<number>(1);
  const { handleAddToCart, isAddedToCart, setIsAddedToCart } = useProductCard();

  return (
    <div className="w-32 sm:w-[250px] relative border border-gray-600 rounded-lg pb-3 ">
      <Link href={`/shop/shop-non/${product.id}`}>
        <div className="relative w-full aspect-square mb-3 overflow-hidden">
          <Image
            src={product.imagePath[0]}
            alt={product.displayName}
            fill
            className="object-contain"
          />
        </div>
      </Link>

      <div className="mb-3">
        <p className="text-sm sm:text-xl text-black px-3 font-semibold">
          {product.displayName}
        </p>
        <p className="text-sm sm:text-xl text-black font-semibold px-3">
          ¥{product.price}
        </p>
      </div>
      <div className="sm:px-2 flex sm:gap-2 px-3 gap-4">
        <QtySelect qty={qty} onChange={(n) => setQty(n)} />
        <button
          className="flex-1 px-2 rounded text-white bg-[#d1505c] hover:bg-[#a33845]"
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
