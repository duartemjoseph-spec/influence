import Link from "next/link";

type NavLink = {
  name: string;
  href: string;
};

export default function Navbar() {
  const links: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Career", href: "/career" },
    { name: "Influence", href: "/influence" },
    { name: "Favorites", href: "/favorites" },
  ];

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/90 sticky top-0 z-50 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <Link href="/" className="text-xl font-bold tracking-wide">
            Shaq <span className="text-yellow-200">• Influential</span>
          </Link>

          <ul className="flex flex-wrap gap-2 md:gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}