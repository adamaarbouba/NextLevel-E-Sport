"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./tournaments.module.css";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [filter, setFilter] = useState("all"); // 'all', 'live', 'upcoming'
  const [loading, setLoading] = useState(true);
  
  // Modal State
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [activeModalTab, setActiveModalTab] = useState("bracket"); // 'bracket', 'maps', 'register'
  const [emailInput, setEmailInput] = useState("");

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

  // Spotlight Tournament (e.g. Overwatch-2 Worlds, which is live)
  const isDefaultView = filter === "all";
  const featuredTournament = isDefaultView && tournaments.length > 0 ? tournaments[0] : null;
  const gridTournaments = featuredTournament ? filteredTournaments.slice(1) : filteredTournaments;

  const handleOpenDetails = (tournament) => {
    setSelectedTournament(tournament);
    setActiveModalTab("bracket");
    setEmailInput("");
  };

  const handleCloseDetails = () => {
    setSelectedTournament(null);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    alert(`Merci ! Vous recevrez toutes les notifications pour "${selectedTournament.title}" sur l'adresse ${emailInput}.`);
    setEmailInput("");
  };

  return (
    <section id="tournaments" className={styles.section} style={{ paddingTop: "120px" }}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Tournaments</h2>
          <p className={styles.sectionDescription}>
            Regardez les meilleures batailles d'E-Sport se dérouler en direct devant vous maintenant.
          </p>
        </div>

        {/* Featured Tournament Spotlight */}
        {featuredTournament && !loading && (
          <div className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <img src={featuredTournament.image} alt={featuredTournament.title} />
              <span className={styles.featuredBadge}>En Direct</span>
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredGame}>{featuredTournament.game}</span>
                <span>{featuredTournament.date}</span>
              </div>
              <h3 className={styles.featuredTitle}>{featuredTournament.title}</h3>
              <p className={styles.featuredDescription}>{featuredTournament.description}</p>
              
              <div className={styles.featuredInfoGrid}>
                <div className={styles.featuredInfoItem}>
                  <span className={styles.featuredInfoLabel}>Prize Pool</span>
                  <span className={styles.featuredInfoVal}>{featuredTournament.prizePool}</span>
                </div>
                <div className={styles.featuredInfoItem}>
                  <span className={styles.featuredInfoLabel}>Équipes</span>
                  <span className={styles.featuredInfoVal}>{featuredTournament.teamsCount} équipes</span>
                </div>
                <div className={styles.featuredInfoItem}>
                  <span className={styles.featuredInfoLabel}>Format</span>
                  <span className={styles.featuredInfoVal}>{featuredTournament.format || "BO5"}</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <Link href="/live" className={styles.featuredBtn}>
                  Regarder le direct
                </Link>
                <button
                  onClick={() => handleOpenDetails(featuredTournament)}
                  className={styles.tournamentButton}
                  style={{ alignSelf: "center", height: "100%", padding: "0.9rem 1.5rem" }}
                >
                  Détails & Bracket
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Filters */}
        <div className={styles.tabFilters}>
          <button
            onClick={() => setFilter("all")}
            className={`${styles.tabBtn} ${filter === "all" ? styles.active : ""}`}
          >
            Tous
          </button>
          <button
            onClick={() => setFilter("live")}
            className={`${styles.tabBtn} ${filter === "live" ? styles.active : ""}`}
          >
            En Direct
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={`${styles.tabBtn} ${filter === "upcoming" ? styles.active : ""}`}
          >
            À Venir
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", color: "#a0a0a0", padding: "3rem" }}>
            Chargement des tournois...
          </div>
        ) : gridTournaments.length === 0 && !featuredTournament ? (
          <div style={{ textAlign: "center", color: "#a0a0a0", padding: "3rem" }}>
            Aucun tournoi trouvé pour cette catégorie.
          </div>
        ) : (
          <div className={styles.tournamentsGrid}>
            {gridTournaments.map((tournament) => (
              <div
                key={tournament.id}
                className={`${styles.tournamentCard} ${
                  tournament.status === "live" ? styles.liveCard : styles.upcomingCard
                }`}
              >
                <div className={styles.tournamentImage}>
                  <img src={tournament.image} alt={tournament.title} />
                  <div className={`${styles.tournamentBadge} ${styles[tournament.status]}`}>
                    {tournament.status === "live" ? "Direct" : "À Venir"}
                  </div>
                </div>
                <div className={styles.tournamentContent}>
                  <div className={styles.tournamentMeta}>
                    <span className={styles.tournamentGame}>{tournament.game}</span>
                    <span className={styles.tournamentDate}>{tournament.date}</span>
                  </div>
                  <h3 className={styles.tournamentTitle}>{tournament.title}</h3>
                  <p className={styles.tournamentDescription}>{tournament.description}</p>
                  
                  <div className={styles.tournamentInfo}>
                    <div className={styles.infoItem}>
                      <svg className={styles.infoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>{tournament.teamsCount} équipes</span>
                    </div>
                    <div className={styles.infoItem}>
                      <svg className={styles.infoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{tournament.prizePool}</span>
                    </div>
                  </div>

                  <div className={styles.cardButtons}>
                    <button
                      onClick={() => handleOpenDetails(tournament)}
                      className={styles.tournamentButton}
                    >
                      Détails
                    </button>

                    {tournament.status === "live" ? (
                      <Link href="/live" className={`${styles.tournamentButton} ${styles.primaryButton}`}>
                        Regarder
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleOpenDetails(tournament)}
                        className={`${styles.tournamentButton} ${styles.primaryButton}`}
                      >
                        S'inscrire
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --- High-Tech Brackets Details Modal Popup --- */}
      {selectedTournament && (
        <div className={styles.modalOverlay} onClick={handleCloseDetails}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderBg}>
                <img src={selectedTournament.image} alt={selectedTournament.title} />
              </div>
              <div className={styles.modalHeaderOverlay}></div>
              <button className={styles.modalCloseBtn} onClick={handleCloseDetails}>
                ✕
              </button>
              
              <div className={styles.modalTitleWrapper}>
                <span className={styles.modalHeaderBadge}>{selectedTournament.game}</span>
                <h3 className={styles.modalTitle}>{selectedTournament.title}</h3>
              </div>
            </div>

            {/* Modal Navigation Tabs */}
            <div className={styles.modalTabs}>
              <button
                onClick={() => setActiveModalTab("bracket")}
                className={`${styles.modalTab} ${activeModalTab === "bracket" ? styles.active : ""}`}
              >
                Matchs & Bracket
              </button>
              <button
                onClick={() => setActiveModalTab("maps")}
                className={`${styles.modalTab} ${activeModalTab === "maps" ? styles.active : ""}`}
              >
                Cartes (Pool)
              </button>
              <button
                onClick={() => setActiveModalTab("register")}
                className={`${styles.modalTab} ${activeModalTab === "register" ? styles.active : ""}`}
              >
                S'abonner
              </button>
            </div>

            {/* Modal Scrollable Body Content */}
            <div className={styles.modalBody}>
              {activeModalTab === "bracket" && (
                <div>
                  <div className={styles.metaGrid}>
                    <div className={styles.metaCol}>
                      <span className={styles.metaLabel}>Format du Tournoi</span>
                      <span className={styles.metaVal}>{selectedTournament.format || "Non spécifié"}</span>
                    </div>
                    <div className={styles.metaCol}>
                      <span className={styles.metaLabel}>Prochain Stream</span>
                      <span className={styles.metaVal}>{selectedTournament.schedule || "Non spécifié"}</span>
                    </div>
                    <div className={styles.metaCol}>
                      <span className={styles.metaLabel}>Prize Pool</span>
                      <span className={styles.metaVal}>{selectedTournament.prizePool}</span>
                    </div>
                  </div>

                  <h4 className={styles.bracketSectionTitle}>Arbre des Matchs</h4>
                  
                  {selectedTournament.bracket && selectedTournament.bracket.length > 0 ? (
                    <div className={styles.bracketWrapper}>
                      {selectedTournament.bracket.map((roundObj, roundIdx) => (
                        <div key={roundIdx} className={styles.bracketRound}>
                          <span className={styles.roundName}>{roundObj.round}</span>
                          {roundObj.matches.map((match, mIdx) => (
                            <div key={mIdx} className={styles.bracketMatch}>
                              <div className={styles.matchHeader}>
                                <span>Match {mIdx + 1}</span>
                                <span className={styles.matchStatusTag}>{match.status}</span>
                              </div>
                              <div className={`${styles.teamRow} ${match.score1 > match.score2 ? styles.winningRow : ""}`}>
                                <div className={styles.teamLeft}>
                                  <span className={styles.teamSymbol}>{match.team1[0]}</span>
                                  <span className={styles.teamText}>{match.team1}</span>
                                </div>
                                <span className={styles.teamScore}>{match.score1 !== null ? match.score1 : "-"}</span>
                              </div>
                              <div className={`${styles.teamRow} ${match.score2 > match.score1 ? styles.winningRow : ""}`}>
                                <div className={styles.teamLeft}>
                                  <span className={styles.teamSymbol}>{match.team2[0]}</span>
                                  <span className={styles.teamText}>{match.team2}</span>
                                </div>
                                <span className={styles.teamScore}>{match.score2 !== null ? match.score2 : "-"}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p style={{ color: "#a0a0a0", fontSize: "0.95rem" }}>
                      L'arbre des matchs n'est pas encore généré pour ce tournoi.
                    </p>
                  )}
                </div>
              )}

              {activeModalTab === "maps" && (
                <div>
                  <h4 className={styles.bracketSectionTitle} style={{ marginBottom: "2rem" }}>Pool de Cartes Officielles</h4>
                  <div className={styles.mapsGrid}>
                    {selectedTournament.maps && selectedTournament.maps.length > 0 ? (
                      selectedTournament.maps.map((mapName, idx) => (
                        <div key={idx} className={styles.mapCard}>
                          {mapName}
                        </div>
                      ))
                    ) : (
                      <p style={{ color: "#a0a0a0" }}>Aucune carte répertoriée.</p>
                    )}
                  </div>
                </div>
              )}

              {activeModalTab === "register" && (
                <div className={styles.registerPanel}>
                  <h4 className={styles.registerTitle}>Recevoir des alertes de Match</h4>
                  <p className={styles.registerDesc}>
                    Ne manquez aucun début de partie ni aucun résultat de bracket pour **{selectedTournament.title}**. Inscrivez votre adresse email pour recevoir des résumés par SMS/Mail.
                  </p>
                  <form onSubmit={handleRegisterSubmit} className={styles.registerForm}>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Votre adresse email"
                      className={styles.registerInput}
                    />
                    <button type="submit" className={styles.registerBtn}>
                      S'abonner
                    </button>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
