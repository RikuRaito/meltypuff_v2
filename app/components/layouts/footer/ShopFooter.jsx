"use client";

import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function ShopFooter() {
  const pathname = usePathname();
  // カートページではフッターを表示しない（カートページ内で合計料金と支払いボタンを管理）
  if (pathname.startsWith("/shop/cart")) return null;
  else return <Footer />;
}
