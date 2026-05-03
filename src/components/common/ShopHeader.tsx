"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ShopHeader() {
  const pathname = usePathname();
  const initialVariant = pathname?.startsWith("/shop/home") ? "dark" : "light";
  return <Header variant={initialVariant} />;
}
