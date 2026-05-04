"use client";
import { useCart } from "@/src/hooks/useCart";
import { CartGrid } from "@/src/components/shop/CartGrid";
import { useState } from "react";
import { SquareCardForm } from "@/src/components/shop/SquareCardForm";

export default function Cart() {
  const { carts, cartsWithData, handleRemoveItem } = useCart();
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState(0);

  const totalAmount = cartsWithData.reduce((sum, item) => {
    return sum + Number(item.price) * item.qty;
  }, 250);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-18 w-full px-4 md:px-40 pb-32 flex-1">
        <h1 className="text-black mt-15 mb-7 text-xl font-bold md:text-3xl text-left">
          カート
        </h1>
        {cartsWithData.map((item) => (
          <CartGrid
            key={item.id}
            productId={item.id}
            displayName={item.displayName}
            productImage={item.image}
            price={item.price}
            qty={item.qty}
            handleItemRemove={handleRemoveItem}
          />
        ))}
        {carts.length === 0 && (
          <div className="text-gray-500 text-center py-10">
            カートに商品がありません。
          </div>
        )}
      </main>

      {carts.length > 0 && !isPaymentFormOpen && (
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex items-center justify-end gap-4">
              <button
                className="bg-[#b43353] text-white rounded-full font-bold text-lg px-8 py-3 hover:bg-[#9a2a45] transition-colors"
                onClick={() => setIsPaymentFormOpen(true)}
              >
                支払う
              </button>
            </div>
          </div>
        </footer>
      )}
      {isPaymentFormOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsPaymentFormOpen(false)}
          />
          <div className="fixed overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl p-6 w-[90%] max-w-sm max-h-[90vh]">
            <SquareCardForm amount={totalAmount} />
          </div>
        </>
      )}
    </div>
  );
}
