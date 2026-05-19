"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initial check
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Custom event listener for real-time sync across login/signup
    const handleAuthChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("authChange", handleAuthChange);
    // Periodically sync in case of redirect or other operations
    const interval = setInterval(handleAuthChange, 800);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authChange"));
    router.push("/");
  };

  const navLinks = [
    { name: "Teams", href: "/teams" },
    { name: "News", href: "/news" },
    { name: "Tournament", href: "/tournaments" },
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
            {navLinks.map((link) => {
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
            
            {user ? (
              <>
                <Link
                  href="/profile"
                  className={`nav-link ${pathname === "/profile" ? "active" : ""}`}
                >
                  Profil
                </Link>
                <button
                  onClick={handleLogout}
                  className="nav-link logout-btn"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "left",
                    padding: 0
                  }}
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`nav-link ${pathname === "/login" ? "active" : ""}`}
                >
                  Connexion
                </Link>
                <Link
                  href="/sign-up"
                  className={`nav-link ${pathname === "/sign-up" ? "active" : ""}`}
                >
                  S'inscrire
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
