import type { ReactNode } from "react";
import Footer from "@/app/components/layouts/footer/Footer";
import ShopHeader from "@/app/components/layouts/header/ShopHeader";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ShopHeader />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </div>
  );
}
