"use client";

import { usePathname } from "next/navigation";
import MenuBar from "@/src/feature/admin/components/MenuBar";
import LogoutButton from "./dashboard/LogoutButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ログインページの場合はレイアウトを適用しない
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      {/* 左端に固定されたメニューバー */}
      <aside className="fixed left-0 top-0 h-screen w-48 border-r border-gray-200 bg-white">
        <MenuBar />
      </aside>

      {/* メインコンテンツエリア（メニューバーの右側） */}
      <main className="ml-48 flex-1">{children}</main>
    </div>
  );
}
