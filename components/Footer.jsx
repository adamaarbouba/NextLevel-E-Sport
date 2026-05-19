"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const logos = [
    { name: "team-liquid", url: "https://escharts.com/img/partners/landing/team-liquid.svg" },
    { name: "esl", url: "https://escharts.com/img/partners/landing/esl.svg" },
    { name: "ea", url: "https://escharts.com/img/partners/landing/electronic-arts.svg" },
    { name: "fnatic", url: "https://escharts.com/img/partners/landing/fnatic.svg" },
    { name: "red-bull", url: "https://escharts.com/img/partners/landing/red-bull.svg" },
    { name: "amd", url: "https://escharts.com/img/partners/landing/amd.svg" },
    { name: "valve", url: "https://escharts.com/img/partners/landing/valve.svg" },
    { name: "esic", url: "https://escharts.com/img/partners/landing/esic.svg" },
    { name: "razer", url: "https://cdn.simpleicons.org/razer" },
    { name: "nvidia", url: "https://cdn.simpleicons.org/nvidia" },
    { name: "intel", url: "https://cdn.simpleicons.org/intel" },
    { name: "steelseries", url: "https://cdn.simpleicons.org/steelseries" },
    { name: "corsair", url: "https://cdn.simpleicons.org/corsair" },
    { name: "msi", url: "https://cdn.simpleicons.org/msi" },
    { name: "asus", url: "https://cdn.simpleicons.org/asus" },
    { name: "playstation", url: "https://cdn.simpleicons.org/playstation" },
    { name: "twitch", url: "https://cdn.simpleicons.org/twitch" },
    { name: "riotgames", url: "https://cdn.simpleicons.org/riotgames" }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Visiteur Footer",
          email: email,
          subject: "Footer Newsletter",
          message: "Inscription à la newsletter depuis le formulaire interactif du footer.",
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: "Inscription réussie !" });
        setEmail("");
      } else {
        setStatus({ type: "error", message: data.error || "Une erreur est survenue." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Impossible de se connecter au serveur." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Infinite Partner Logos Marquee Section (Above Footer) */}
      <div className="logo-container">
        <div className="logo-track">
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
              
              {/* Dynamic Newsletter Form */}
              <div className="footer-newsletter-box">
                <h4 className="footer-newsletter-title">
                  Newsletter
                </h4>
                <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                  <input
                    type="email"
                    placeholder="Votre adresse email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="footer-newsletter-input"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="footer-newsletter-btn"
                  >
                    {loading ? "..." : "S'abonner"}
                  </button>
                </form>
                {status.message && (
                  <p className={`footer-newsletter-status ${status.type}`}>
                    {status.message}
                  </p>
                )}
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Navigation</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/tournaments" className="footer-link">Tournois</Link>
                </li>
                <li>
                  <Link href="/teams" className="footer-link">Équipes & Classements</Link>
                </li>
                <li>
                  <Link href="/live" className="footer-link">Calendrier & Live</Link>
                </li>
                <li>
                  <Link href="/news" className="footer-link">Actualités</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Support & Contact</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/contact" className="footer-link">Contactez-nous</Link>
                </li>
                <li>
                  <a href="https://discord.com" className="footer-link" target="_blank" rel="noreferrer">Serveur Discord</a>
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
