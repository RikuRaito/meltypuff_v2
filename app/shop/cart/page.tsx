"use client";
import { useCart } from "@/src/hooks/useCart";

export default function Cart() {
  const { carts, handleChangeQty, handleRemoveItem } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
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
                <div className="flex-1">
                  <p className="text-black font-semibold">商品ID: {item.id}</p>
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
                <button
                  onClick={() => handleRemoveItem(item.id, item.type)}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  削除
                </button>
              </div>
            ))}
        </div>
        {carts.length === 0 && (
          <div className="text-gray-500 text-center py-10">
            カートに商品がありません。
          </div>
        )}
      </main>

      {carts.length > 0 && (
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex items-center justify-end gap-4">
              <button className="bg-[#b43353] text-white rounded-full font-bold text-lg px-8 py-3 hover:bg-[#9a2a45] transition-colors">
                支払う
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
