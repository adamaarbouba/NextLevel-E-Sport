"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import styles from "../../profile/profile.module.css";

export default function TeamProfile({ params }) {
  const { id } = use(params);
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch(`/api/teams/${id}`);
        if (res.ok) {
          const data = await res.json();
          setTeam(data);
        } else {
          setTeam(null);
        }
      } catch (err) {
        console.error("Failed to fetch team:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTeam();
  }, [id]);

  if (loading) {
    return (
      <main className={styles.profileContainer}>
        <div style={{ color: "#a0a0a0", textAlign: "center", padding: "4rem" }}>
          Chargement du profil d'équipe...
        </div>
      </main>
    );
  }

  if (!team) {
    return (
      <main className={styles.profileContainer}>
        <div className={styles.widgetCard} style={{ textAlign: "center", padding: "4rem 2rem", maxWidth: "500px", margin: "40px auto" }}>
          <h2 className={styles.widgetTitle} style={{ borderLeft: "none", paddingLeft: 0 }}>Équipe introuvable</h2>
          <p style={{ color: "#a0a0b0", marginBottom: "2rem" }}>
            L'équipe demandée n'existe pas ou a été dissoute.
          </p>
          <Link href="/teams" className={styles.btn} style={{ textDecoration: "none", display: "inline-block" }}>
            Retour au classement
          </Link>
        </div>
      </main>
    );
  }

  const roster = team.roster || [];
  const winrate = Math.round((team.wins / (team.wins + team.losses)) * 100);

  return (
    <main className={styles.profileContainer}>
      {/* Back button */}
      <div style={{ marginBottom: "1.5rem" }}>
        <Link href="/teams" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
          <svg style={{ width: "16px", height: "16px", transform: "rotate(180deg)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
          Retour au classement
        </Link>
      </div>

      {/* Profile Banner / Header */}
      <div className={styles.profileHeader}>
        <div style={{ width: "120px", height: "120px", background: "rgba(0, 0, 0, 0.4)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(59, 130, 246, 0.2)", padding: "10px", flexShrink: 0 }}>
          <img
            src={team.logo}
            alt={team.name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className={styles.profileInfo}>
          <span className={styles.profileRole}>{team.game} • Europe</span>
          <h1 className={styles.profileName}>{team.name}</h1>
          <p className={styles.profileBio}>
            Équipe professionnelle engagée dans le championnat NextLevel E-Sport.
          </p>
        </div>
      </div>

      <div className={styles.profileGridSingle}>
        {/* Main Team Info */}
        <div className={styles.widgetCard}>
          <h2 className={styles.widgetTitle}>Statistiques de Compétition</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Classement Général</span>
              <span className={styles.statValue}>#{team.rank}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Victoires</span>
              <span className={styles.statValue}>{team.wins}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Défaites</span>
              <span className={styles.statValue}>{team.losses}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Taux de Victoire</span>
              <span className={styles.statValue}>{winrate}%</span>
            </div>
          </div>
        </div>

        {/* Roster Grid */}
        <div className={styles.widgetCard}>
          <h2 className={styles.widgetTitle}>Membres de l'équipe (Roster)</h2>
          <div className={styles.rosterGrid}>
            {roster.map((player) => (
              <div key={player.name} className={styles.playerCard}>
                <div className={styles.playerRank}>{player.rank}</div>
                <div
                  className={styles.playerPhoto}
                  style={{ backgroundImage: `url(${player.img})` }}
                />
                <h3 className={styles.playerName}>{player.name}</h3>
                <span className={styles.playerRole}>{player.role}</span>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", width: "100%", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "0.75rem", fontSize: "0.85rem" }}>
                  <div>
                    <div style={{ color: "#a0a0b0" }}>Winrate</div>
                    <strong style={{ color: "#ffffff" }}>{player.winrate}</strong>
                  </div>
                  <div>
                    <div style={{ color: "#a0a0b0" }}>KDA</div>
                    <strong style={{ color: "#ffffff" }}>{player.kda}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
