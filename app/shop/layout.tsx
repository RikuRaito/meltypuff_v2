import type { ReactNode } from "react";
import Footer from "@/app/components/layouts/footer/Footer";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
