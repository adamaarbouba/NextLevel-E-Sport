"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./profile.module.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("Duelist");
  const [bio, setBio] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setFirstName(parsed.firstName || parsed.username?.split(" ")[0] || "");
      setLastName(parsed.lastName || parsed.username?.split(" ")[1] || "");
      setRole(parsed.role || "Duelist");
      setBio(parsed.bio || "Joueur passionné de NextLevel E-Sport. En route vers le sommet !");
    }
    setLoading(false);
  }, []);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setStatusMessage("");

    const updatedUser = {
      ...user,
      firstName,
      lastName,
      username: `${firstName} ${lastName}`,
      role,
      bio,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    
    // Dispatch authChange to update Header in real-time
    window.dispatchEvent(new Event("authChange"));
    
    setStatusMessage("Profil mis à jour avec succès !");
    setTimeout(() => {
      setStatusMessage("");
    }, 3000);
  };

  if (loading) {
    return (
      <main className={styles.profileContainer}>
        <div style={{ color: "#a0a0a0", textAlign: "center", padding: "4rem" }}>Chargement...</div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className={styles.profileContainer}>
        <div className={styles.widgetCard} style={{ textAlign: "center", padding: "4rem 2rem", maxWidth: "500px", margin: "40px auto" }}>
          <h2 className={styles.widgetTitle} style={{ borderLeft: "none", paddingLeft: 0 }}>Accès Restreint</h2>
          <p style={{ color: "#a0a0b0", marginBottom: "2rem" }}>
            Veuillez vous connecter ou vous inscrire pour accéder à votre profil e-sport.
          </p>
          <Link href="/login" className={styles.btn} style={{ textDecoration: "none", display: "inline-block" }}>
            Se connecter
          </Link>
        </div>
      </main>
    );
  }

  const initialLetter = firstName ? firstName[0].toUpperCase() : (user.username ? user.username[0].toUpperCase() : "P");

  const teammates = [
    { name: "Jaquan", role: "Duelist / Capitaine", winrate: "74%", kda: "1.17", img: "/Jaquan.jpg", rank: "#1" },
    { name: "Lokaka", role: "Controller", winrate: "70%", kda: "1.09", img: "/Lokaka.jpg", rank: "#2" },
    { name: "Aalal", role: "Initiator", winrate: "68%", kda: "1.05", img: "/aalal.jpg", rank: "#3" }
  ];

  return (
    <main className={styles.profileContainer}>
      {/* Profile Banner / Header */}
      <div className={styles.profileHeader}>
        <div className={styles.avatarCircle}>
          {initialLetter}
        </div>
        <div className={styles.profileInfo}>
          <span className={styles.profileRole}>{role}</span>
          <h1 className={styles.profileName}>{firstName} {lastName}</h1>
          <p className={styles.profileBio}>{bio}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className={styles.tabNav}>
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`${styles.tabBtn} ${activeTab === "dashboard" ? styles.active : ""}`}
        >
          Tableau de Bord
        </button>
        <button
          onClick={() => setActiveTab("team")}
          className={`${styles.tabBtn} ${activeTab === "team" ? styles.active : ""}`}
        >
          Mon Équipe
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`${styles.tabBtn} ${activeTab === "settings" ? styles.active : ""}`}
        >
          Paramètres
        </button>
      </div>

      {/* Tab Content: Dashboard */}
      {activeTab === "dashboard" && (
        <div className={styles.profileGrid}>
          <div className={styles.widgetCard}>
            <h2 className={styles.widgetTitle}>Statistiques Personnelles</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Parties Gagnées</span>
                <span className={styles.statValue}>142</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Taux de Victoire</span>
                <span className={styles.statValue}>72%</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Headshot Rate</span>
                <span className={styles.statValue}>68%</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>KDA Moyen</span>
                <span className={styles.statValue}>1.24</span>
              </div>
            </div>
            <div className={styles.levelBox}>
              <div className={styles.levelText}>
                <span>Niveau E-Sport</span>
                <span>45% (Progression vers Pro)</span>
              </div>
              <div className={styles.prog}>
                <div className={styles.pf} style={{ width: "45%" }}></div>
              </div>
            </div>
          </div>

          <div className={styles.widgetCard}>
            <h2 className={styles.widgetTitle}>Activité Récente</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "8px", borderLeft: "4px solid #10b981" }}>
                <div>
                  <strong style={{ color: "#ffffff" }}>VICTOIRE</strong>
                  <div style={{ fontSize: "0.8rem", color: "#a0a0b0" }}>vs Fire Bolts • Valorant</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <strong style={{ color: "#ffffff" }}>13 - 8</strong>
                  <div style={{ fontSize: "0.8rem", color: "#a0a0b0" }}>Il y a 2h</div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "8px", borderLeft: "4px solid #10b981" }}>
                <div>
                  <strong style={{ color: "#ffffff" }}>VICTOIRE</strong>
                  <div style={{ fontSize: "0.8rem", color: "#a0a0b0" }}>vs Neon Shadows • Valorant</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <strong style={{ color: "#ffffff" }}>13 - 11</strong>
                  <div style={{ fontSize: "0.8rem", color: "#a0a0b0" }}>Hier</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content: Team */}
      {activeTab === "team" && (
        <div className={styles.profileGridSingle}>
          {/* Main Team Info */}
          <div className={styles.widgetCard}>
            <h2 className={styles.widgetTitle}>Fiche d'Équipe: Phoenix Rising</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem", alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  src="/Phoneix_Rising.png"
                  alt="Phoenix Rising Logo"
                  style={{ width: "120px", height: "120px", objectFit: "contain", filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))" }}
                />
                <h3 className={styles.playerName} style={{ marginTop: "1rem" }}>Phoenix Rising</h3>
                <span className={styles.profileRole}>VALORANT • EU</span>
              </div>
              <div>
                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Classement Général</span>
                    <span className={styles.statValue}>#1</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Victoires d'Équipe</span>
                    <span className={styles.statValue}>127</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Taux de Victoire</span>
                    <span className={styles.statValue}>78%</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Titres</span>
                    <span className={styles.statValue} style={{ fontSize: "1rem", lineHeight: "1.2", marginTop: "0.5rem" }}>2x Champions du Monde</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Roster Grid */}
          <div className={styles.widgetCard}>
            <h2 className={styles.widgetTitle}>Roster Actif (Membres)</h2>
            <div className={styles.rosterGrid}>
              {teammates.map((player) => (
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
      )}

      {/* Tab Content: Settings */}
      {activeTab === "settings" && (
        <div className={styles.profileGridSingle}>
          <div className={styles.widgetCard}>
            <h2 className={styles.widgetTitle}>Éditer le profil</h2>
            {statusMessage && (
              <div className={`${styles.status} ${styles.success}`} style={{ marginBottom: "1.5rem" }}>
                {statusMessage}
              </div>
            )}
            <form onSubmit={handleSaveSettings} className={styles.settingsForm}>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Prénom</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Nom de famille</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Rôle de Jeu</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={styles.select}
                >
                  <option value="Duelist">Duelist</option>
                  <option value="Controller">Controller</option>
                  <option value="Initiator">Initiator</option>
                  <option value="Sentinel">Sentinel</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Bio / Tagline</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className={styles.btn}>
                Sauvegarder les modifications
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
