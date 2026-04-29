"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ShopHeader() {
    const pathname = usePathname();
    const variant = pathname?.startsWith("/shop/home") ? "dark" : "light";
    return <Header variant={variant} />;
}
