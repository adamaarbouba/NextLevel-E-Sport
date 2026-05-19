import Link from "next/link";

export default function Header() {
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
            <Link href="/teams" className="nav-link">Teams</Link>
            <Link href="/news" className="nav-link">News</Link>
            <Link href="/tournaments" className="nav-link">Tournament</Link>
            <Link href="/sign-up" className="nav-link">Sign-Up</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
