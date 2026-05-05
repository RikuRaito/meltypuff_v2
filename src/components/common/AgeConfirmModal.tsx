"use client";
import { useEffect, useState } from "react";

export default function AgeConfirmModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const check = async () => {
      const confirmed = localStorage.getItem("age_confirmed");
      if (!confirmed) setIsVisible(true);
    };
    check();
  }, []);

  if (!isVisible) return null;

  const handleConfirm = () => {
    localStorage.setItem("age_confirmed", "true");
    setIsVisible(false);
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 mx-4 max-w-sm w-full text-center shadow-2xl">
        <h2 className="text-2xl font-bold text-black mb-2">年齢確認</h2>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          当サイトは電子タバコを販売しています。
          <br />
          18歳以上の方のみご利用いただけます。
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleConfirm}
            className="w-full bg-[#b43353] text-white font-bold py-3 rounded-full hover:bg-[#9a2a45] transition-colors"
          >
            18歳以上です
          </button>
          <button
            onClick={handleDeny}
            className="w-full border border-gray-300 text-gray-600 font-semibold py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            18歳未満です
          </button>
        </div>
      </div>
    </div>
  );
}
