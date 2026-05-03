"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/shop/article", label: "Article" },
  { href: "/shop/contact", label: "Contact" },
  { href: "/shop/login", label: "Login" },
];

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const [cartCount, setCartCount] = useState(0);
  const [isHmbgOpen, setIsHmbgOpen] = useState(false);
  //ヒーローセクションによって文字の色を変更機能のためのstate
  const [currentVarient, setCurrentVarient] = useState(variant);

  const textColor = currentVarient === "dark" ? "text-white" : "text-black";
  const borderColor =
    currentVarient === "dark" ? "border-white/20" : "border-black";
  const navBorderColor =
    currentVarient === "dark"
      ? "border-transparent hover:border-white/30"
      : "border-transparent hover:border-black/30";
  const cartBorderColor =
    currentVarient === "dark" ? "border-white/30" : "border-black/30";
  const menuBg = currentVarient === "dark" ? "bg-black/80" : "bg-white";
  const menuBorder =
    currentVarient === "dark" ? "border-white/20" : "border-gray-200";

  //カート内商品の数量を計算
  useEffect(() => {
    const loadCartCount = () => {
      try {
        const cartRaw = window.localStorage.getItem("meltypuff_cart");
        if (!cartRaw) {
          setCartCount(0);
          return;
        }

        const parsed = JSON.parse(cartRaw);
        if (Array.isArray(parsed)) {
          const itemsqty = parsed.reduce(
            (sum, item) => sum + (typeof item.qty === "number" ? item.qty : 0),
            0,
          );
          setCartCount(itemsqty);
        } else if (Array.isArray(parsed?.items)) {
          setCartCount(parsed.items.length);
        } else if (typeof parsed?.length === "number") {
          setCartCount(parsed.length);
        } else {
          setCartCount(0);
        }
      } catch {
        setCartCount(0);
      }
    };

    loadCartCount();

    const handleCartUpdate = () => loadCartCount();
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "meltypuff_cart") loadCartCount();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  useEffect(() => {
    const handleHeroVisiblity = (e: Event) => {
      const custom = e as CustomEvent<{ isVisible: boolean }>;
      setCurrentVarient(custom.detail.isVisible ? "dark" : "light");
    };
    window.addEventListener("heroVisibility", handleHeroVisiblity);
    return () =>
      window.removeEventListener("heroVisibility", handleHeroVisiblity);
  });

  useEffect(() => {
    setCurrentVarient(variant);
  }, [variant]);

  return (
    <header className="fixed inset-x-0 top-3 z-50">
      <div
        className={`mx-auto flex w-[92%] max-w-6xl items-center justify-between gap-4 rounded-full border ${borderColor} px-6 py-3 text-sm shadow-lx backdrop-blur`}
      >
        {/* ロゴ */}
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold"
        >
          <img
            src="/logo/logo.png"
            className="w-10 block"
          />
          <span
            className={`hidden sm:block text-xl tracking-wide ${textColor}`}
          >
            Melty Puff
          </span>
        </Link>

        {/* PC用ナビゲーション */}
        <nav className={`hidden sm:flex flex-1 justify-center ${textColor}`}>
          <ul className="flex items-center gap-6 text-2xl sm:text-xl font-medium">
            <Link
              className={`flex items-center gap-1 rounded-full border ${navBorderColor} px-4 py-2 transition-colors duration-200`}
              href="/shop/shop-non"
            >
              Shop
            </Link>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-[#ffd6de]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* スマホ用 Shop リンク */}
        <Link
          className={`sm:hidden flex items-center gap-1 text-xl rounded-full border ${navBorderColor} px-3 py-2 ${textColor} transition-colors duration-200`}
          href="/shop/shop-non"
        >
          Shop
        </Link>

        <div className="flex items-center gap-3">
          {/* ハンバーガーメニュー（スマホのみ） */}
          <div className="relative sm:hidden">
            <button
              onClick={() => setIsHmbgOpen((prev) => !prev)}
              className={`flex flex-col justify-center gap-1.5 p-1 ${textColor}`}
            >
              <span
                className={`block w-5 h-0.5 ${currentVarient === "dark" ? "bg-white" : "bg-black"}`}
              />
              <span
                className={`block w-5 h-0.5 ${currentVarient === "dark" ? "bg-white" : "bg-black"}`}
              />
              <span
                className={`block w-5 h-0.5 ${currentVarient === "dark" ? "bg-white" : "bg-black"}`}
              />
            </button>
            {isHmbgOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsHmbgOpen(false)}
                />
                <ul
                  className={`absolute right-0 top-10 z-20 w-40 rounded-xl border ${menuBorder} ${menuBg} backdrop-blur shadow-xl p-2`}
                >
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsHmbgOpen(false)}
                        className={`block px-4 py-2 rounded-lg ${textColor} hover:bg-white/10`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* カートボタン */}
          <Link
            href="/shop/cart"
            className={`relative flex items-center gap-2 rounded-full border ${cartBorderColor} px-4 py-2 font-semibold text-[#b43353] transition`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-[#b43353]"
            >
              <path
                d="M3 4h2l2 12h10l2-8H7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="10"
                cy="20"
                r="1.2"
                fill="currentColor"
              />
              <circle
                cx="17"
                cy="20"
                r="1.2"
                fill="currentColor"
              />
            </svg>
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-3 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#b43353] text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
