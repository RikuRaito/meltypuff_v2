import Link from "next/link";

const FOOTER_MENU = [
  { href: "/legal/privacy_policy", label: "プライバシーポリシー" },
  { href: "/legal/terms_of_service", label: "利用規約" },
  { href: "/legal/tokushou", label: "特定商法に基づく表記" },
];

export default function Footer() {
  return (
    <footer className="bg-black/90 relative flex flex-col items-center gap-2 px-6 py-4 text-sm text-white">
      <span className="text-center">
        &copy; 2025 Melty Puff. All rights reserved.
      </span>
      <div className="flex flex-col items-center gap-1 text-xs sm:flex-row sm:gap-4">
        {FOOTER_MENU.map((menu) => (
          <Link className="hover:underline" href={menu.href} key={menu.href}>
            {menu.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
