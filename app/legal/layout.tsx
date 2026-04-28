import type { ReactNode } from "react";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white pt-20">{children}</main>
      <Footer />
    </div>
  );
}
