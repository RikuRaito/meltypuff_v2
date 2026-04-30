import type { ReactNode } from "react";
import ShopFooter from "@/src/components/common/ShopFooter";
import ShopHeader from "@/src/components/common/ShopHeader";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ShopHeader />
      <main className="flex-1 bg-white">{children}</main>
      <ShopFooter />
    </div>
  );
}
