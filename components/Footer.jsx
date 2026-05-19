import Link from "next/link";

export default function Footer() {
  const logos = [
    { name: "team-liquid", url: "https://escharts.com/img/partners/landing/team-liquid.svg", isSVG: true },
    { name: "esl", url: "https://escharts.com/img/partners/landing/esl.svg", isSVG: true },
    { name: "ea", url: "https://escharts.com/img/partners/landing/electronic-arts.svg", isSVG: true },
    { name: "fnatic", url: "https://escharts.com/img/partners/landing/fnatic.svg", isSVG: true },
    { name: "red-bull", url: "https://escharts.com/img/partners/landing/red-bull.svg", isSVG: true },
    { name: "amd", url: "https://escharts.com/img/partners/landing/amd.svg", isSVG: true },
    { name: "valve", url: "https://escharts.com/img/partners/landing/valve.svg", isSVG: true },
    { name: "esic", url: "https://escharts.com/img/partners/landing/esic.svg", isSVG: true },
    { name: "razer", url: "https://cdn.simpleicons.org/razer/a0a0a0/ffffff" },
    { name: "nvidia", url: "https://cdn.simpleicons.org/nvidia/a0a0a0/ffffff" },
    { name: "intel", url: "https://cdn.simpleicons.org/intel/a0a0a0/ffffff" },
    { name: "steelseries", url: "https://cdn.simpleicons.org/steelseries/a0a0a0/ffffff" },
    { name: "logitechg", url: "https://cdn.simpleicons.org/logitechg/a0a0a0/ffffff" },
    { name: "corsair", url: "https://cdn.simpleicons.org/corsair/a0a0a0/ffffff" },
    { name: "msi", url: "https://cdn.simpleicons.org/msi/a0a0a0/ffffff" },
    { name: "asus", url: "https://cdn.simpleicons.org/asus/a0a0a0/ffffff" },
    { name: "playstation", url: "https://cdn.simpleicons.org/playstation/a0a0a0/ffffff" },
    { name: "xbox", url: "https://cdn.simpleicons.org/xbox/a0a0a0/ffffff" },
    { name: "twitch", url: "https://cdn.simpleicons.org/twitch/a0a0a0/ffffff" },
    { name: "riotgames", url: "https://cdn.simpleicons.org/riotgames/a0a0a0/ffffff" }
  ];

  return (
    <>
      {/* Infinite Partner Logos Marquee Section (Above Footer) */}
      <div className="logo-container">
        <div className="logo-track">
          {/* Double map list to form seamless endless scrolling */}
          {logos.map((logo, idx) => (
            <div className="logo-img" key={`logo-1-${idx}`}>
              <img
                loading="lazy"
                decoding="async"
                src={logo.url}
                height={logo.name === "fnatic" ? 48 : 28}
                width={logo.name === "amd" ? 100 : 40}
                alt={logo.name}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
          {logos.map((logo, idx) => (
            <div className="logo-img" key={`logo-2-${idx}`}>
              <img
                loading="lazy"
                decoding="async"
                src={logo.url}
                height={logo.name === "fnatic" ? 48 : 28}
                width={logo.name === "amd" ? 100 : 40}
                alt={logo.name}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo" style={{ marginBottom: "1.5rem" }}>
                <Link href="/">
                  <span className="logo-text">NextLevel</span>
                  <span className="logo-accent">E-Sport</span>
                </Link>
              </div>
              <p className="footer-tagline">
                La plateforme ultime pour les compétitions e-sport. Rejoignez des
                milliers de joueurs passionnés, participez à des tournois mondiaux et forgez votre légende.
              </p>
              <div className="social-links">
                <a href="#" className="social-link twitter" aria-label="Twitter">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="social-link discord" aria-label="Discord">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link twitch" aria-label="Twitch">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link youtube" aria-label="YouTube">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Plateforme</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/tournaments" className="footer-link">Tournois</Link>
                </li>
                <li>
                  <Link href="/teams" className="footer-link">Équipes</Link>
                </li>
                <li>
                  <Link href="/teams" className="footer-link">Classements</Link>
                </li>
                <li>
                  <Link href="/live" className="footer-link">Calendrier & Live</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Communauté</h3>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Forum & Events</a></li>
                <li><a href="https://discord.com" className="footer-link" target="_blank" rel="noreferrer">Discord Guild</a></li>
                <li>
                  <Link href="/news" className="footer-link">Actualités</Link>
                </li>
                <li><a href="#" className="footer-link">Support Joueurs</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Légal</h3>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-link">Conditions d'utilisation</a>
                </li>
                <li>
                  <a href="#" className="footer-link">Politique cookies</a>
                </li>
                <li>
                  <a href="#" className="footer-link">Règlement général</a>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">Contactez-nous</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 NextLevel E-Sport. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
