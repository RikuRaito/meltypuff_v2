"use client";
import { useState } from "react";
import { RegularCustomer } from "@prisma/client";

export const useRegularList = () => {
  // ドロップダウンの開閉状態
  const [isOpen, setIsOpen] = useState(false);
  // 選択された顧客
  const [selectedCustomer, setSelectedCustomer] =
    useState<RegularCustomer | null>(null);

  // ドロップダウンの開閉を切り替え
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 顧客を選択
  const handleSelectCustomer = (customer: RegularCustomer) => {
    setSelectedCustomer(customer);
    setIsOpen(false); // 選択後に閉じる
  };

  // 選択をクリア
  const clearSelection = () => {
    setSelectedCustomer(null);
  };

  return {
    isOpen,
    selectedCustomer,
    toggleDropdown,
    handleSelectCustomer,
    clearSelection,
  };
};
