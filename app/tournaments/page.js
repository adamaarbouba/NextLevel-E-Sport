"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [filter, setFilter] = useState("all"); // 'all', 'live', 'upcoming'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTournaments() {
      try {
        const res = await fetch("/api/tournaments");
        if (res.ok) {
          const data = await res.json();
          setTournaments(data);
        }
      } catch (err) {
        console.error("Failed to fetch tournaments:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTournaments();
  }, []);

  const filteredTournaments = tournaments.filter((t) => {
    if (filter === "all") return true;
    return t.status === filter;
  });

  return (
    <section id="tournaments" className="section" style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tournaments</h2>
          <p className="section-description">
            Watch the Best E-Sport Battles Unfold Infront Of You Live on NextLevel E-Sport Now.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="tab-filters">
          <button
            onClick={() => setFilter("all")}
            className={`tab-btn ${filter === "all" ? "active" : ""}`}
          >
            Tous
          </button>
          <button
            onClick={() => setFilter("live")}
            className={`tab-btn ${filter === "live" ? "active" : ""}`}
          >
            En Direct
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={`tab-btn ${filter === "upcoming" ? "active" : ""}`}
          >
            À Venir
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", color: "#a0a0a0", padding: "3rem" }}>
            Chargement des tournois...
          </div>
        ) : filteredTournaments.length === 0 ? (
          <div style={{ textAlign: "center", color: "#a0a0a0", padding: "3rem" }}>
            Aucun tournoi trouvé pour cette catégorie.
          </div>
        ) : (
          <div className="tournaments-grid">
            {filteredTournaments.map((tournament) => (
              <div key={tournament.id} className="tournament-card">
                <div className="tournament-image">
                  <img src={tournament.image} alt={tournament.title} />
                  <div className={`tournament-badge ${tournament.status}`}>
                    {tournament.status === "live" ? "Direct" : "À Venir"}
                  </div>
                </div>
                <div className="tournament-content">
                  <div className="tournament-meta">
                    <span className="tournament-game">{tournament.game}</span>
                    <span className="tournament-date">{tournament.date}</span>
                  </div>
                  <h3 className="tournament-title">{tournament.title}</h3>
                  <p className="tournament-description">{tournament.description}</p>
                  <div className="tournament-info">
                    <div className="info-item">
                      <svg
                        className="info-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      <span>{tournament.teamsCount} équipes</span>
                    </div>
                    <div className="info-item">
                      <svg
                        className="info-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>{tournament.prizePool}</span>
                    </div>
                  </div>
                  {tournament.status === "live" ? (
                    <Link href="/live" className="tournament-button">Regarder</Link>
                  ) : (
                    <button className="tournament-button" onClick={() => alert(`Vous serez notifié pour ${tournament.title}!`)}>
                      M'avertir
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
