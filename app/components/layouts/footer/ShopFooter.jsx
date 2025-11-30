"use client";

import Footer from "./Footer";
import Footer_cart from "./Footer_cart";
import { usePathname } from "next/navigation";

export default function ShopFooter() {
  const pathname = usePathname();
  if (pathname.startsWith("/shop/cart")) return <Footer_cart />;
  else return <Footer />;
}
