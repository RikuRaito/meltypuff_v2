import Link from "next/link";

const NAV_ITEMS = [
  { href: "/shop/home", label: "Home" },
  { href: "/shop/products", label: "Products" },
  { href: "/shop/about", label: "About" },
  { href: "/shop/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between gap-6 rounded-full border border-white/20 px-6 py-3 text-sm shadow-lx backdrop-blur">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <img src="/logo/logo.png" className="w-10"></img>
          <span className="text-xl tracking-wide text-white">Melty Puff</span>
        </Link>

        <nav className="flex flex-1 justify-center text-white">
          <ul className="flex items-center gap-6 text-xl font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-[#ffd6de]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/shop/cart"
          className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 font-semibold text-[#b43353] transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-[#b43353]"
          >
            <path
              d="M3 4h2l2 12h10l2-8H7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1.2" fill="currentColor" />
            <circle cx="17" cy="20" r="1.2" fill="currentColor" />
          </svg>
          <span>Cart</span>
        </Link>
      </div>
    </header>
  );
}
