"use client";
import LogoutButton from "@/app/admin/dashboard/LogoutButton";
import Link from "next/link";

const NAV_ITEMS = [
  {
    href: "/admin/payments",
    label: "注文一覧",
  },
  {
    href: "/admin/make_payment",
    label: "注文作成",
  },
  {
    href: "/admin/storage",
    label: "在庫確認",
  },
  {
    href: "/admin/contacts",
    label: "お問い合わせ",
  },
];

export default function MenuBar() {
  return (
    <div>
      <nav className="flex flex-col p-4">
        <ul className="space-y-2 mt-5">
          {NAV_ITEMS.map((menu) => (
            <li key={menu.href}>
              <Link
                href={menu.href}
                className="block font-bold text-xl rounded-md px-4 py-2 text-black hover:bg-gray-100 transition-colors"
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-5 space-y-2 pl-6">
        <LogoutButton />
      </div>
    </div>
  );
}
