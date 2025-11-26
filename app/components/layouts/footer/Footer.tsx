import Link from "next/link";

const FOOTER_MENU = [
  { href: "/legal/privacy_policy", label: "プライバシーポリシー" },
  { href: "/legal/terms_of_service", label: "利用規約" },
  { href: "/legal/tokushou", label: "特定商法に基づく表記" },
];

export default function Footer() {
  return (
    <footer className="bg-amber-950">
      <div className="relative flex">
        {FOOTER_MENU.map((menu) => (
          <Link className="" href={menu.href}>
            {menu.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
