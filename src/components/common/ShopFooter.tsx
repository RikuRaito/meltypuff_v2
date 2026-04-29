"use client";

import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function ShopFooter() {
  const pathname = usePathname();
  const isCart = pathname.startsWith("/shop/cart");
  return <Footer isCart={isCart} />;
}
