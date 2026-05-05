"use client";

import { usePathname } from "next/navigation";
import MenuBar from "@/src/components/admin/MenuBar";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      {/* ハンバーガーボタン */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="fixed top-4 left-4 z-50 flex flex-col gap-1.5 p-2 bg-white border border-gray-200 rounded-lg shadow-sm"
      >
        <span className="block w-5 h-0.5 bg-gray-600" />
        <span className="block w-5 h-0.5 bg-gray-600" />
        <span className="block w-5 h-0.5 bg-gray-600" />
      </button>

      {/* オーバーレイ */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* サイドメニュー */}
      <aside
        className={`fixed left-0 top-0 h-screen w-48 border-r border-gray-200 bg-white z-40 transition-transform duration-200 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MenuBar />
      </aside>

      <main className="flex-1">{children}</main>
    </div>
  );
}
