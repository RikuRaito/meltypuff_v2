"use client";
import { useCart } from "@/src/hooks/useCart";
import { CartGrid } from "@/src/components/shop/CartGrid";
import { useState } from "react";
import { SquareCardForm } from "@/src/components/shop/SquareCardForm";
import { CouponForm } from "@/src/components/shop/CouponForm";

export default function Cart() {
  const { carts, cartsWithData, handleRemoveItem, fee, isLoadingAmount } =
    useCart();
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState("");

  const baseAmount = cartsWithData.reduce((sum, item) => {
    return sum + Number(item.price) * item.qty;
  }, fee);
  const [discountedAmount, setDiscountedAmount] = useState<number | null>(null);
  const totalAmount = discountedAmount ?? baseAmount;

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
        {carts.length > 0 && (
          <div className="mt-6">
            <CouponForm
              totalAmount={baseAmount}
              setTotalAmount={setDiscountedAmount}
              onCouponApplied={setCouponCode}
            />
          </div>
        )}
      </main>

      {carts.length > 0 && !isPaymentFormOpen && (
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-row items-center">
                {isLoadingAmount ? (
                  <svg
                    className="animate-spin h-5 w-5 text-gray-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                ) : (
                  <p className="text-black text-xl font-bold pr-2">
                    合計料金:¥{totalAmount.toLocaleString()}
                  </p>
                )}
              </div>

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
            <SquareCardForm
              cartItems={carts}
              couponCode={couponCode}
            />
          </div>
        </>
      )}
    </div>
  );
}
