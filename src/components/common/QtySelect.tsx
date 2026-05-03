"use client";
import { useRef, useState } from "react";

interface QtySelectProps {
  qty: number;
  onChange: (n: number) => void;
  size?: "sm" | "default";
}

export const QtySelect = ({ qty, onChange, size = "default" }: QtySelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropUp(rect.top > window.innerHeight / 2);
    }
    setIsOpen(true);
  };

  const buttonClass = size === "sm"
    ? "w-full px-2 py-1 border border-gray-300 rounded text-black font-semibold text-xs"
    : "w-full px-3 py-2 border border-gray-300 rounded text-black font-semibold";

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={handleOpen}
        className={buttonClass}
      >
        数量：{qty}
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-10"
            onClick={() => setIsOpen(false)}
          />
          <ul
            className={`absolute z-20 w-24 bg-white border border-gray-300 rounded shadow-xl ${
              dropUp ? "bottom-full mb-1" : "top-full mt-1"
            }`}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <li
                key={n}
                onClick={() => { onChange(n); setIsOpen(false); }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
              >
                {n}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
