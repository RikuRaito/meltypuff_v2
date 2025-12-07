"use client";
import { RegularCustomer } from "@/src/types/regularCustomer";
import { useState } from "react";

type Props = {
  customers: RegularCustomer[];
};

export const RegularList = ({ customers }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">注文作成</h1>
        <div className="rounded-lg bg-white p-6 shadow">
          {/*ドロップダウン*/}
          <div className="">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex w-40 items-center justify-between rounded-lg border px-3 py-2 text-black"
            >
              <span className="w-2" />
              <span>顧客一覧</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                color="black"
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
            {isOpen && (
              <ul className="">
                {customers.length === 0 ? (
                  <li className="">顧客情報がありません</li>
                ) : (
                  customers.map((customer) => (
                    <li key={customer.id} className="">
                      {customer.name}
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
