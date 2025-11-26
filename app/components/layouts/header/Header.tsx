"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "/shop/about", label: "About" },
  { href: "/shop/contact", label: "Contact" },
  { href: "/shop/login", label: "Login" },
];

const SHOP_MENU = [
  { href: "/shop/shop-non", label: "ノンニコチン" },
  { href: "/shop/shop-nic", label: "ニコチン" },
];

export default function Header() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shopRef.current && !shopRef.current.contains(event.target as Node)) {
        setIsShopOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const loadCartCount = () => {
      try {
        const cartRaw = window.localStorage.getItem("cart");
        if (!cartRaw) {
          setCartCount(0);
          return;
        }

        const parsed = JSON.parse(cartRaw);
        if (Array.isArray(parsed)) {
          setCartCount(parsed.length);
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

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "cart") {
        loadCartCount();
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between gap-6 rounded-full border border-white/20 px-6 py-3 text-sm shadow-lx backdrop-blur">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <img src="/logo/logo.png" className="w-10"></img>
          <span className="text-xl tracking-wide text-white">Melty Puff</span>
        </Link>

        <nav className="flex flex-1 justify-center text-white">
          <ul className="flex items-center gap-6 text-xl font-medium">
            <li ref={shopRef} className="relative">
              <button
                className="flex items-center gap-1 rounded-full border border-transparent px-4 py-2 transition-colors duration-200 hover:border-white/30"
                onClick={() => setIsShopOpen((prev) => !prev)}
              >
                Shop
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${
                    isShopOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {isShopOpen && (
                <div className="absolute left-1/2 top-12 z-50 w-48 -translate-x-1/2 rounded-2xl border border-white/30 bg-white/90 p-3 text-base text-neutral-900 shadow-xl backdrop-blur">
                  {SHOP_MENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-2 font-medium text-[#b43353] transition hover:bg-[#b43353] hover:text-white"
                      onClick={() => setIsShopOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
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

        <Link
          href="/shop/cart"
          className="relative flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 font-semibold text-[#b43353] transition"
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
            <circle cx="10" cy="20" r="1.2" fill="currentColor" />
            <circle cx="17" cy="20" r="1.2" fill="currentColor" />
          </svg>
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -right-3 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#b43353] text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
