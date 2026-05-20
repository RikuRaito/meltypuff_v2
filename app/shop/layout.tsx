import type { ReactNode } from "react";
import Script from "next/script";
import ShopFooter from "@/src/components/common/ShopFooter";
import ShopHeader from "@/src/components/common/ShopHeader";
import AgeConfirmModal from "@/src/components/common/AgeConfirmModal";
import { cookies } from "next/headers";

export default async function ShopLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const isAgeVerified = cookieStore.get("age_verified")?.value === "true";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Script
        src={process.env.NEXT_PUBLIC_SQUARE_JS_URL!}
        strategy="afterInteractive"
      />
      {!isAgeVerified && <AgeConfirmModal />}
      <ShopHeader />
      <main className="flex-1 bg-white">{children}</main>
      <ShopFooter />
    </div>
  );
}
