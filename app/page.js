"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState({ players: "0", tournaments: "0", prize: "$0M" });

  useEffect(() => {
    // Simulate count ticks
    const timer = setTimeout(() => {
      setStats({ players: "500K+", tournaments: "200+", prize: "$20M+" });
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>Saison 2026 en cours</span>
              </div>
              <h1 className="hero-title">
                Rejoignez la<br />
                <span className="hero-title-gradient">Compétition</span>
              </h1>
              <p className="hero-description">
                Affrontez les meilleurs joueurs, participez à des tournois épiques
                et devenez une légende de l'e-sport.
              </p>
              <Link href="/tournaments" className="hero-button">
                <span>Découvrir les tournois</span>
                <svg
                  className="button-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </Link>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-value">{stats.players}</div>
                  <div className="stat-label">Joueurs actifs</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">{stats.tournaments}</div>
                  <div className="stat-label">Tournois</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">{stats.prize}</div>
                  <div className="stat-label">Prize Pool</div>
                </div>
              </div>
            </div>

            {/* Spotlight Card - UI Redesign & Rearrangement */}
            <div className="hero-visual">
              <div className="spotlight-card">
                <div className="spotlight-glow"></div>
                <div className="spotlight-header">
                  <span className="spotlight-badge">En Direct</span>
                  <span className="spotlight-live-dot"></span>
                </div>
                <div className="spotlight-body">
                  <h3 className="spotlight-title">Overwatch-2 Worlds</h3>
                  <p className="spotlight-game">Grand Final Live Match</p>
                  <div className="spotlight-teams">
                    <div className="spotlight-team">
                      <img src="/Phoneix_Rising.png" alt="Phoenix Rising" />
                      <span>PHX</span>
                    </div>
                    <span className="spotlight-vs">VS</span>
                    <div className="spotlight-team">
                      <img src="/The Spartio.png" alt="The Spartio" />
                      <span>SPA</span>
                    </div>
                  </div>
                  <Link href="/live" className="spotlight-btn">
                    Regarder en direct
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-bg"></div>
        <div className="about-overlay"></div>
        <div className="container about-container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="about-title">
                About <span className="about-title-gradient">Us</span>
              </h2>
              <p className="about-description">
                NextLevel E-Sport est la plateforme compétitive de nouvelle génération. Nous organisons, diffusons et suivons les plus grands tournois e-sports mondiaux pour offrir aux passionnés une immersion totale. Rejoignez-nous pour repousser vos limites.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h4>Tournois Sécurisés</h4>
                <p>Arbitrage professionnel et serveurs dédiés anti-triche.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h4>Cashprizes Garantis</h4>
                <p>Retraits rapides et prize pools entièrement certifiés.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
