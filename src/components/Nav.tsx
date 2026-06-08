import Link from "next/link";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Start Here", href: "/contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight text-gray-900 hover:text-indigo-600 transition-colors"
        >
          chava<span className="text-indigo-600">codes4u</span>
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
