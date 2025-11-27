"use client";

import { usePathname } from "next/navigation";
import HeaderHome from "./Header_home";
import Header from "./Header";

export default function ShopHeader() {
  const pathname = usePathname();
  return pathname?.startsWith("/shop/home") ? (
    <HeaderHome />
  ) : (
    <Header positionClass="relative" />
  );
}
