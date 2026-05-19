"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

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
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span className={styles.badgeDot}></span>
                <span>Saison 2026 en cours</span>
              </div>
              <h1 className={styles.heroTitle}>
                Rejoignez la<br />
                <span className={styles.heroTitleGradient}>Compétition</span>
              </h1>
              <p className={styles.heroDescription}>
                Affrontez les meilleurs joueurs, participez à des tournois épiques
                et devenez une légende de l'e-sport.
              </p>
              <Link href="/tournaments" className={styles.heroButton}>
                <span>Découvrir les tournois</span>
                <svg
                  className={styles.buttonIcon}
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
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{stats.players}</div>
                  <div className={styles.statLabel}>Joueurs actifs</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{stats.tournaments}</div>
                  <div className={styles.statLabel}>Tournois</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{stats.prize}</div>
                  <div className={styles.statLabel}>Prize Pool</div>
                </div>
              </div>
            </div>

            {/* Spotlight Card - UI Redesign & Rearrangement */}
            <div className={styles.heroVisual}>
              <div className={styles.spotlightCard}>
                <div className={styles.spotlightGlow}></div>
                <div className={styles.spotlightHeader}>
                  <span className={styles.spotlightBadge}>En Direct</span>
                  <span className={styles.spotlightLiveDot}></span>
                </div>
                <div className={styles.spotlightBody}>
                  <h3 className={styles.spotlightTitle}>Overwatch-2 Worlds</h3>
                  <p className={styles.spotlightGame}>Grand Final Live Match</p>
                  <div className={styles.spotlightTeams}>
                    <div className={styles.spotlightTeam}>
                      <img src="/Phoneix_Rising.png" alt="Phoenix Rising" />
                      <span>PHX</span>
                    </div>
                    <span className={styles.spotlightVs}>VS</span>
                    <div className={styles.spotlightTeam}>
                      <img src="/The Spartio.png" alt="The Spartio" />
                      <span>SPA</span>
                    </div>
                  </div>
                  <Link href="/live" className={styles.spotlightBtn}>
                    Regarder en direct
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutBg}></div>
        <div className={styles.aboutOverlay}></div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>
                About <span className={styles.aboutTitleGradient}>Us</span>
              </h2>
              <p className={styles.aboutDescription}>
                NextLevel E-Sport est la plateforme compétitive de nouvelle génération. Nous organisons, diffusons et suivons les plus grands tournois e-sports mondiaux pour offrir aux passionnés une immersion totale. Rejoignez-nous pour repousser vos limites.
              </p>
            </div>
            <div className={styles.aboutFeatures}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🛡️</div>
                <h4>Tournois Sécurisés</h4>
                <p>Arbitrage professionnel et serveurs dédiés anti-triche.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🏆</div>
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
