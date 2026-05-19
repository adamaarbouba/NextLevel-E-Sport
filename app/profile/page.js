"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <section className="section" style={{ paddingTop: "120px", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "#a0a0a0" }}>Chargement...</div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="section" style={{ paddingTop: "120px", minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h2 className="newsletter-title" style={{ marginBottom: "1rem" }}>Accès Restreint</h2>
        <p style={{ color: "#a0a0a0", marginBottom: "2rem", textAlign: "center", maxWidth: "400px" }}>
          Veuillez vous connecter ou vous inscrire pour accéder à votre profil e-sport.
        </p>
        <Link href="/login" className="btnS" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>Connexion</span>
        </Link>
      </section>
    );
  }

  return (
    <section id="profile" className="section" style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Profil Joueur</h2>
          <p className="section-description">
            Bienvenue, {user.username || user.firstName || "Player"} ! Voici votre statut personnel et d'équipe.
          </p>
        </div>
        <div className="container" style={{ marginBottom: "3rem" }}>
          <div className="team-card">
            <div className="team-rank">
              <span className="rank-number">#1</span>
            </div>
            <div className="team-logo">
              <img src="/Phoneix_Rising.png" alt="Phoenix Rising" />
            </div>
            <h3 className="team-name">Phoenix Rising</h3>
            <p className="team-game">Valorant • EU</p>
            <div className="team-stats">
              <div className="team-stat">
                <span className="stat-label">Victoires</span>
                <span className="stat-value">127</span>
              </div>
              <div className="team-stat">
                <span className="stat-label">Taux de victoire</span>
                <span className="stat-value">78%</span>
              </div>
              <div className="team-stat">
                <span className="stat-label">Titres</span>
                <span className="stat-value">2 times World Champions</span>
              </div>
              <div className="team-stat">
                <span className="stat-label">Highest Rated Player</span>
                <span className="stat-value">Jaquan</span>
              </div>
            </div>
            <div className="team-stats">
              <div className="team-stat">
                <span className="stat-label">Progress Since</span>
                <span className="stat-value">2018 / Ongoing </span>
              </div>
            </div>
            <div className="team-stats">
              <div className="team-stat">
                <span className="stat-label">E-Sport Level</span>
                <span className="stat-value">
                  35%
                  <div className="prog">
                    <div className="pf" style={{ width: "35%" }}></div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Player roster cards */}
      <div className="ProfileC">
        <div className="team-card">
          <div className="team-rank">
            <span className="rank-number">#1</span>
          </div>
          <div className="Pf1"></div>
          <div className="team-stats">
            <div className="team-stat">
              <span className="stat-label">Total Kills</span>
              <span className="stat-value">118</span>
            </div>
            <div className="team-stat">
              <span className="stat-label">Headshots Rate</span>
              <span className="stat-value">74%</span>
            </div>
            <div className="team-stat">
              <span className="stat-label">Favorite Weapon</span>
              <span className="stat-value">Vandal</span>
            </div>
            <div className="team-stat">
              <span className="stat-label">KDA</span>
              <span className="stat-value">1.17</span>
            </div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-rank">
            <span className="rank-number">#2</span>
          </div>
          <div className="Pf2"></div>
          <div className="team-stats">
            <div className="team-stat">
              <span className="stat-label">Total Kills</span>
              <span className="stat-value">118</span>
            </div>
            <div className="team-stat">
              <span className="stat-label">Headshots Rate</span>
              <span className="stat-value">74%</span>
            </div>
            <div className="team-stat">
              <span className="stat-label">Favorite Weapon</span>
              <span className="stat-value">Phantom</span>
            </div>
            <div className="team-stat">
              <span className="stat-label">KDA</span>
              <span className="stat-value">1.17</span>
            </div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-rank">
            <span className="rank-number">#3</span>
          </div>
          <div className="Pf3"></div>
          <div className="team-stats">
            <div className="team-stat">
              <span className="stat-label">Total Kills</span>
              <span className="stat-value">118</span>
            </div>
            <div className="team-stat">
              <span className="stat-label">Headshots Rate</span>
              <span className="stat-value">74%</span>
            </div>
            <div className="team-stat">
              <span className="stat-label">Favorite Weapon</span>
              <span className="stat-value">Vandal</span>
            </div>
            <div className="team-stat">
              <span className="stat-label">KDA</span>
              <span className="stat-value">1.17</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
