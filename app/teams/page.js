"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./teams.module.css";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const res = await fetch("/api/teams");
        if (res.ok) {
          const data = await res.json();
          setTeams(data);
        }
      } catch (err) {
        console.error("Failed to fetch teams:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTeams();
  }, []);

  const podiumTeams = teams.filter((t) => t.rank <= 3);
  const remainingTeams = teams.filter((t) => t.rank > 3);

  return (
    <section className={styles.teamsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Podium & Leaderboard</h2>
          <p className={styles.sectionDescription}>
            Les meilleures équipes de la plateforme s'affrontent pour le sommet.
          </p>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", color: "#a0a0a0", padding: "3rem" }}>
            Chargement du classement...
          </div>
        ) : (
          <>
            {/* Top 3 Podium Grid Layout */}
            {podiumTeams.length > 0 && (
              <div className={styles.podiumSection}>
                {podiumTeams.map((team) => (
                  <div key={team.id} className={`${styles.podiumCard} ${styles[`rank${team.rank}`]}`}>
                    <div className={styles.podiumPlace}>{team.rank}</div>
                    <div className={styles.podiumLogo}>
                      <img src={team.logo} alt={team.name} />
                    </div>
                    <h3 className={styles.podiumName}>{team.name}</h3>
                    <p className={styles.podiumGame}>{team.game}</p>
                    <div className={styles.podiumStats}>
                      <div className={styles.podiumStat}>
                        <span className={styles.podiumStatLabel}>Victoires</span>
                        <span className={styles.podiumStatValue}>{team.wins}</span>
                      </div>
                      <div className={styles.podiumStat}>
                        <span className={styles.podiumStatLabel}>Défaites</span>
                        <span className={styles.podiumStatValue}>{team.losses}</span>
                      </div>
                    </div>
                    <Link href={`/teams/${team.id}`} className={styles.teamButton}>
                      Voir le profil
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {/* Leaderboard list for ranks 4+ */}
            {remainingTeams.length > 0 && (
              <div className={styles.teamsGrid}>
                {remainingTeams.map((team) => (
                  <div key={team.id} className={styles.teamCard}>
                    <div className={styles.teamRank}>
                      <span className={styles.rankNumber}>#{team.rank}</span>
                    </div>
                    <div className={styles.teamLogo}>
                      <img src={team.logo} alt={team.name} />
                    </div>
                    <h3 className={styles.teamName}>{team.name}</h3>
                    <p className={styles.teamGame}>{team.game} • EU</p>
                    <div className={styles.teamStats}>
                      <div className={styles.teamStat}>
                        <span className={styles.statLabel}>Victoires</span>
                        <span className={styles.statValue}>{team.wins}</span>
                      </div>
                      <div className={styles.teamStat}>
                        <span className={styles.statLabel}>Défaites</span>
                        <span className={styles.statValue}>{team.losses}</span>
                      </div>
                    </div>
                    <Link href={`/teams/${team.id}`} className={styles.teamButton}>
                      Voir le profil
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
