"use client";
import { useCart } from "@/src/hooks/useCart";

export default function Cart() {
  const {
    carts,
    discountRate,
    totalPrice,
    isApplyedCoupon,
    isPaymentCompleted,
    isProcessing,
    handleChangeQty,
    handleRemoveItem,
    handleApplyCoupon,
    handleCheckout,
    handleClosePaymentComplete,
  } = useCart();

  const appId = "Appid";
  const locationId = "main";

  return (
    <div className="flex flex-col min-h-screen">
      {/* 決済完了メッセージ */}
      {isPaymentCompleted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 shadow-xl">
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="mx-auto h-16 w-16 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                決済が完了しました
              </h2>
              <p className="text-gray-600 mb-6">
                ご注文ありがとうございました。確認メールをお送りいたします。
              </p>
              <button
                onClick={handleClosePaymentComplete}
                className="bg-[#b43353] text-white rounded-full font-bold px-8 py-3 hover:bg-[#9a2a45] transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="pt-18 w-full px-4 md:px-40 pb-32 flex-1">
        <h1 className="text-black mt-15 mb-7 text-xl font-bold md:text-3xl text-left">
          カート
        </h1>
        <div className="flex flex-col gap-4">
          {carts.length > 0 &&
            carts.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                className="flex flex-row items-center gap-4 p-4 border border-gray-200 rounded-lg"
              >
                <img
                  src={`${item.imagePath}`}
                  className="w-18 h-18 md:w-24 md:h-24 object-cover border rounded"
                />
                <div className="flex-1">
                  <p className="text-black font-semibold">{item.displayName}</p>
                  <p className="text-gray-600">
                    ¥{item.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">数量:</label>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => {
                      const newQty = parseInt(e.target.value, 10);
                      if (!isNaN(newQty)) {
                        handleChangeQty(item.id, item.type, newQty);
                      }
                    }}
                    className="w-16 text-center border border-gray-300 rounded px-2 py-1 text-black"
                  />
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-black font-bold text-lg">
                    ¥{(item.price * item.qty).toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id, item.type)}
                    className="text-sm text-red-500 hover:text-red-700 mt-1"
                  >
                    削除
                  </button>
                </div>
              </div>
            ))}
          <div>
            <h2 className="text-black text-xl md:text-2xl font-bold mt-6 mb-4">
              クーポンコード
            </h2>
            <form className="flex gap-2" onSubmit={handleApplyCoupon}>
              <input
                type="text"
                name="coupon"
                placeholder="クーポンコードを入力"
                disabled={isApplyedCoupon}
                className="flex-1 border border-gray-300 rounded px-4 py-2 text-black disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isApplyedCoupon}
                className="bg-[#b43353] text-white rounded px-6 py-2 font-bold hover:bg-[#9a2a45] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                適用
              </button>
            </form>
            {isApplyedCoupon && (
              <p className="text-green-600 font-semibold mt-2">
                クーポンが適用されました（割引率:{" "}
                {Math.round((1 - discountRate) * 100)}%）
              </p>
            )}
          </div>
        </div>
        {carts.length === 0 && (
          <div className="text-gray-500 text-center py-10">
            カートに商品がありません。
          </div>
        )}
      </main>

      {/* 画面下部固定の合計料金と支払いボタン */}
      {carts.length > 0 && (
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">合計</span>
                <span className="text-2xl font-bold text-black">
                  ¥{Math.floor(totalPrice * discountRate).toLocaleString()}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="bg-[#b43353] text-white rounded-full font-bold text-lg px-8 py-3 hover:bg-[#9a2a45] transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isProcessing ? "処理中..." : "支払う"}
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
