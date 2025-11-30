import type { ReactNode } from "react";
import Footer from "@/app/components/layouts/footer/Footer";
import Header from "@/app/components/layouts/header/Header";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white pt-20">{children}</main>
      <Footer />
    </div>
  );
}
