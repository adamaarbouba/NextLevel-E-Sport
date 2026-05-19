"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
    <section id="teams" className="section section-dark" style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Podium & Leaderboard</h2>
          <p className="section-description">
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
              <div className="podium-section">
                {podiumTeams.map((team) => (
                  <div key={team.id} className={`podium-card rank-${team.rank}`}>
                    <div className="podium-place">{team.rank}</div>
                    <div className="podium-logo">
                      <img src={team.logo} alt={team.name} />
                    </div>
                    <h3 className="podium-name">{team.name}</h3>
                    <p className="podium-game">{team.game}</p>
                    <div className="podium-stats">
                      <div className="podium-stat">
                        <span className="podium-stat-label">Victoires</span>
                        <span className="podium-stat-value">{team.wins}</span>
                      </div>
                      <div className="podium-stat">
                        <span className="podium-stat-label">Défaites</span>
                        <span className="podium-stat-value">{team.losses}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Leaderboard list for ranks 4+ */}
            {remainingTeams.length > 0 && (
              <div className="teams-grid">
                {remainingTeams.map((team) => (
                  <div key={team.id} className="team-card">
                    <div className="team-rank">
                      <span className="rank-number">#{team.rank}</span>
                    </div>
                    <div className="team-logo">
                      <img src={team.logo} alt={team.name} />
                    </div>
                    <h3 className="team-name">{team.name}</h3>
                    <p className="team-game">{team.game} • EU</p>
                    <div className="team-stats">
                      <div className="team-stat">
                        <span className="stat-label">Victoires</span>
                        <span className="stat-value">{team.wins}</span>
                      </div>
                      <div className="team-stat">
                        <span className="stat-label">Défaites</span>
                        <span className="stat-value">{team.losses}</span>
                      </div>
                    </div>
                    <Link href="/profile" className="team-button">Voir le profil</Link>
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
