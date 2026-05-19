"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: "Teams", href: "/teams" },
    { name: "News", href: "/news" },
    { name: "Tournament", href: "/tournaments" },
    { name: "Sign-Up", href: "/sign-up" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link href="/">
              <span className="logo-text">NextLevel</span>
              <span className="logo-accent">E-Sport</span>
            </Link>
          </div>
          <nav className="nav">
            {links.map((link) => {
              // Exact match or subpath match (e.g. /news/article matches /news)
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
