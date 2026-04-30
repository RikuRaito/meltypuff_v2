"use client"
import { Product_Non } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
    product: Product_Non
}

export default function ProductCard({ product }: ProductCardProps) {
    const [qty, setQty] = useState<number>(1);
    const [isQtyChangeOpen, setIsQtyChangeOpen] = useState<boolean>(false);
    return (
        <div className="w-40 sm:w-[250px] border border-gray-600 rounded-lg pb-3 overflow-hidden">
            <div className="relative w-full aspect-square mb-3">
                <Image src={product.imagePath[0]} alt={product.displayName} fill className="object-contain" />
            </div>
            <div>
                <p className="text-xl text-black px-3 font-semibold">{product.displayName}</p>
                <p className="text-xl text-black font-semibold px-3">¥{product.price}</p>
            </div>
            <div className="relative px-2">
                <button onClick={() => setIsQtyChangeOpen(true)} className="px-3 border border-gray-300 rounded ">
                    <p className="text-black font-semibold">数量：{qty}</p>
                </button>
            </div>
        </div>

    )
} 
