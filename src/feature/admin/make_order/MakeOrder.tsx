"use client";
import { RegularCustomer, Product_Nic } from "@prisma/client";
import { useRegularList } from "./useRegularList";

type Props = {
  customers: RegularCustomer[];
  products?: Product_Nic[];
};

export const MakeOrder = ({ customers, products }: Props) => {
  const {
    isOpen,
    selectedCustomer,
    toggleDropdown,
    handleSelectCustomer,
    clearSelection,
  } = useRegularList();

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
    </div>
  );
};
