"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import styles from "./home.module.css";

export default function Home() {
  const [stats, setStats] = useState({ players: "0", tournaments: "0", prize: "$0M" });
  const [tournaments, setTournaments] = useState([]);
  const [news, setNews] = useState([]);

  // Live score simulator state
  const [score1, setScore1] = useState(2);
  const [score2, setScore2] = useState(1);
  const [gameTime, setGameTime] = useState(24);
  const [currentMap, setCurrentMap] = useState("King's Row");
  const maps = ["King's Row", "Oasis", "Route 66", "Numbani"];

  useEffect(() => {
    // Animate stats counters
    const timer = setTimeout(() => {
      setStats({ players: "500K+", tournaments: "200+", prize: "$20M+" });
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  // Fetch tournaments and news from APIs
  useEffect(() => {
    async function fetchData() {
      try {
        const [tRes, nRes] = await Promise.all([
          fetch("/api/tournaments"),
          fetch("/api/news"),
        ]);
        if (tRes.ok) setTournaments(await tRes.json());
        if (nRes.ok) setNews(await nRes.json());
      } catch (err) {
        console.error("Failed to fetch home data:", err);
      }
    }
    fetchData();
  }, []);

  // Live score ticker simulation — feels like a real game is happening
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setGameTime((prev) => {
        const next = prev + 1;
        if (next > 59) return 0;
        return next;
      });
    }, 1000);

    const scoreInterval = setInterval(() => {
      const rand = Math.random();
      if (rand < 0.3) {
        setScore1((s) => Math.min(s + 1, 5));
      } else if (rand < 0.6) {
        setScore2((s) => Math.min(s + 1, 5));
      }
      // Cycle maps occasionally
      setCurrentMap((prev) => {
        const idx = maps.indexOf(prev);
        return maps[(idx + 1) % maps.length];
      });
    }, 8000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(scoreInterval);
    };
  }, []);

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.digitalGrid}></div>
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
                et devenez une légende de l&apos;e-sport.
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

            {/* Gamey Spotlight Card with Live Score Ticker */}
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

                  {/* Simulated Live Scoreline */}
                  <div className={styles.spotlightScoreline}>
                    <span className={styles.scoreTime}>
                      {String(Math.floor(gameTime / 60)).padStart(2, "0")}:{String(gameTime % 60).padStart(2, "0")}
                    </span>
                    <span className={styles.scorePill}>
                      {score1} - {score2}
                    </span>
                    <span className={styles.mapIndicator}>Map: {currentMap}</span>
                  </div>

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

      {/* ===== ACTIVE TOURNAMENTS SECTION ===== */}
      {tournaments.length > 0 && (
        <section className={styles.homeSection}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitleGroup}>
                <span className={styles.subTitle}>Compétitions Actives</span>
                <h2 className={styles.mainTitle}>Tournois en Cours</h2>
              </div>
              <Link href="/tournaments" className={styles.viewAllLink}>
                Voir tous les tournois →
              </Link>
            </div>
            <div className={styles.tournamentsScroll}>
              {tournaments.map((t) => (
                <div key={t.id} className={styles.miniCard}>
                  <div className={styles.miniCardHeader}>
                    <span className={styles.miniGame}>{t.game}</span>
                    <span className={`${styles.miniStatus} ${styles[t.status]}`}>
                      {t.status === "live" ? "En Direct" : "À Venir"}
                    </span>
                  </div>
                  <h3 className={styles.miniTitle}>{t.title}</h3>
                  <div className={styles.miniPrize}>
                    <span>{t.teamsCount} équipes</span>
                    <span style={{ color: "#3b82f6", fontWeight: 700 }}>{t.prizePool}</span>
                  </div>
                  <Link href="/tournaments" className={styles.miniLink}>
                    Détails du tournoi
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== LATEST NEWS SECTION ===== */}
      {news.length > 0 && (
        <section className={styles.homeSection}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitleGroup}>
                <span className={styles.subTitle}>Actualités</span>
                <h2 className={styles.mainTitle}>Dernières Nouvelles</h2>
              </div>
              <Link href="/news" className={styles.viewAllLink}>
                Toutes les actualités →
              </Link>
            </div>
            <div className={styles.homeNewsGrid}>
              {news.slice(0, 3).map((item) => (
                <div key={item.id} className={styles.newsCard}>
                  <div className={styles.newsCardImage}>
                    <img src={item.image} alt={item.title} />
                    <span className={styles.newsBadge}>{item.category}</span>
                  </div>
                  <div className={styles.newsCardContent}>
                    <h3 className={styles.newsCardTitle}>{item.title}</h3>
                    <p className={styles.newsCardExcerpt}>{item.excerpt}</p>
                    <Link href={`/news/article?slug=${item.slug}`} className={styles.newsCardLink}>
                      Lire l&apos;article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== ABOUT US SECTION ===== */}
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
                NextLevel E-Sport est la plateforme compétitive de nouvelle génération.
                Nous organisons, diffusons et suivons les plus grands tournois e-sports
                mondiaux pour offrir aux passionnés une immersion totale. Rejoignez-nous
                pour repousser vos limites.
              </p>
            </div>
            <div className={styles.aboutFeatures}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4>Tournois Sécurisés</h4>
                <p>Arbitrage professionnel et serveurs dédiés anti-triche.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h4>Cashprizes Garantis</h4>
                <p>Retraits rapides et prize pools entièrement certifiés.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h4>Multi-Jeux</h4>
                <p>Valorant, Overwatch, LoL, CS2, Rocket League et plus encore.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
