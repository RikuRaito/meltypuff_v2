"use client";
// TODO: issue #21 ニコチン商品削除時にProduct_Nicの参照も削除する
import { RegularCustomer } from "@prisma/client";
import { type OrderItem } from "./useSelectProducts";
import { useRegularList } from "./useRegularList";
import { useSelectProducts } from "./useSelectProducts";

type Props = {
  customers: RegularCustomer[];
  // TODO: issue #21 ニコチン商品削除時にproductsも削除する
  products: OrderItem["product"][];
};

export const MakeOrder = ({ customers, products }: Props) => {
  const {
    isOpen,
    selectedCustomer,
    toggleDropdown,
    handleSelectCustomer,
    clearSelection,
  } = useRegularList();

  const {
    quantities,
    orderItems,
    totalPrice,
    handleQuantityChange,
    addToOrder,
    removeFromOrder,
    updateOrderQuantity,
    clearOrder,
  } = useSelectProducts();

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">注文作成</h1>
      <div className="rounded-lg bg-white p-6 shadow">
        {/* ドロップダウン */}
        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="flex w-48 items-center justify-between rounded-lg border border-gray-300 px-3 py-2 text-black hover:bg-gray-50"
          >
            <span className="w-2" />
            <span>{selectedCustomer ? selectedCustomer.name : "顧客一覧"}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* ドロップダウンリスト */}
          {isOpen && (
            <ul className="absolute z-10 mt-1 w-48 rounded-lg border border-gray-200 bg-white shadow-lg max-h-60 overflow-auto">
              {customers.length === 0 ? (
                <li className="px-4 py-3 text-gray-500">
                  顧客情報がありません
                </li>
              ) : (
                customers.map((customer) => (
                  <li
                    key={customer.id}
                    onClick={() => handleSelectCustomer(customer)}
                    className="cursor-pointer px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 text-black"
                  >
                    <div className="font-medium">{customer.name}</div>
                    <div className="text-sm text-gray-500">
                      {customer.phone}
                    </div>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>

        {/* 選択された顧客の情報 */}
        {selectedCustomer && (
          <div className="mt-6 p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                選択された顧客
              </h2>
              <button
                onClick={clearSelection}
                className="text-sm text-red-500 hover:text-red-700"
              >
                選択解除
              </button>
            </div>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">名前:</span>{" "}
                {selectedCustomer.name}
              </p>
              <p>
                <span className="font-medium">電話:</span>{" "}
                {selectedCustomer.phone}
              </p>
              <p>
                <span className="font-medium">郵便番号:</span>{" "}
                {selectedCustomer.postCode}
              </p>
              <p>
                <span className="font-medium">住所:</span>{" "}
                {selectedCustomer.address1} {selectedCustomer.address2}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 商品一覧 */}
      <div className="mt-8 rounded-lg bg-white p-6 shadow">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">商品一覧</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg p-4 flex flex-col"
            >
              <img
                src={product.imagePath}
                alt={product.displayName}
                className="w-full h-32 object-contain mb-3"
              />
              <p className="font-medium text-gray-900 text-sm mb-1">
                {product.displayName}
              </p>
              <p className="text-gray-600 mb-3">
                ¥{product.price.toLocaleString()}
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <input
                  type="number"
                  min="1"
                  value={quantities[product.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(
                      product.id,
                      parseInt(e.target.value) || 1,
                    )
                  }
                  className="w-16 text-center border border-gray-300 rounded px-2 py-1 text-gray-900"
                />
                <button
                  onClick={() => addToOrder(product)}
                  className="flex-1 bg-[#b43353] text-white rounded px-3 py-1 text-sm hover:bg-[#9a2a45] transition-colors"
                >
                  追加
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 注文内容 */}
      <div className="mt-8 rounded-lg bg-white p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">注文内容</h2>
          {orderItems.length > 0 && (
            <button
              onClick={clearOrder}
              className="text-sm text-red-500 hover:text-red-700"
            >
              すべてクリア
            </button>
          )}
        </div>

        {orderItems.length === 0 ? (
          <p className="text-gray-500">商品が追加されていません</p>
        ) : (
          <>
            <div className="space-y-3">
              {orderItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between border-b border-gray-100 pb-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.imagePath}
                      alt={item.product.displayName}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {item.product.displayName}
                      </p>
                      <p className="text-sm text-gray-500">
                        ¥{item.product.price.toLocaleString()} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() =>
                          updateOrderQuantity(
                            item.product.id,
                            item.quantity - 1,
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateOrderQuantity(
                            item.product.id,
                            item.quantity + 1,
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <p className="w-24 text-right font-medium text-gray-900">
                      ¥{(item.product.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromOrder(item.product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 合計 */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">
                  合計
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  ¥{totalPrice.toLocaleString()}
                </span>
              </div>
              <button
                disabled={!selectedCustomer}
                className="mt-4 w-full bg-[#b43353] text-white rounded-lg py-3 font-semibold hover:bg-[#9a2a45] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {selectedCustomer ? "注文を確定する" : "顧客を選択してください"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
