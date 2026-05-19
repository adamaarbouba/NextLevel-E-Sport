import Link from "next/link";

export default function Teams() {
  return (
    <section id="teams" className="section section-dark" style={{ paddingTop: "120px" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Équipes en vedette</h2>
          <p className="section-description">
            Les meilleures équipes de la plateforme
          </p>
        </div>
        <div className="teams-grid">
          {/* Team 1 */}
          <div className="team-card">
            <div className="team-rank">
              <span className="rank-number">#1</span>
            </div>
            <div className="team-logo">
              <img
                src="/Phoneix_Rising.png"
                alt="Phoenix Rising"
              />
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
            </div>
            <Link href="/profile" className="team-button">Voir le profil</Link>
          </div>

          {/* Team 2 */}
          <div className="team-card">
            <div className="team-rank">
              <span className="rank-number">#2</span>
            </div>
            <div className="team-logo">
              <img
                src="/The Spartio.png"
                alt="The Spartio"
              />
            </div>
            <h3 className="team-name">The Spartio</h3>
            <p className="team-game">Valorant • EU</p>
            <div className="team-stats">
              <div className="team-stat">
                <span className="stat-label">Victoires</span>
                <span className="stat-value">120</span>
              </div>
              <div className="team-stat">
                <span className="stat-label">Taux de victoire</span>
                <span className="stat-value">77%</span>
              </div>
            </div>
            <Link href="/profile" className="team-button">Voir le profil</Link>
          </div>

          {/* Team 3 */}
          <div className="team-card">
            <div className="team-rank">
              <span className="rank-number">#1</span>
            </div>
            <div className="team-logo">
              <img
                src="/Dragon_Force.png"
                alt="Dragon Force"
              />
            </div>
            <h3 className="team-name">Dragon Force</h3>
            <p className="team-game">League of Legends • NA</p>
            <div className="team-stats">
              <div className="team-stat">
                <span className="stat-label">Victoires</span>
                <span className="stat-value">115</span>
              </div>
              <div className="team-stat">
                <span className="stat-label">Taux de victoire</span>
                <span className="stat-value">75%</span>
              </div>
            </div>
            <Link href="/profile" className="team-button">Voir le profil</Link>
          </div>

          {/* Team 4 */}
          <div className="team-card">
            <div className="team-rank">
              <span className="rank-number">#2</span>
            </div>
            <div className="team-logo">
              <img
                src="/WolfTeam.png"
                alt="Wolves"
              />
            </div>
            <h3 className="team-name">Wolves</h3>
            <p className="team-game">League of Legends • NA</p>
            <div className="team-stats">
              <div className="team-stat">
                <span className="stat-label">Victoires</span>
                <span className="stat-value">101</span>
              </div>
              <div className="team-stat">
                <span className="stat-label">Taux de victoire</span>
                <span className="stat-value">74%</span>
              </div>
            </div>
            <Link href="/profile" className="team-button">Voir le profil</Link>
          </div>

          {/* Team 5 */}
          <div className="team-card">
            <div className="team-rank">
              <span className="rank-number">#1</span>
            </div>
            <div className="team-logo">
              <img
                src="/Warriors.png"
                alt="Warriors"
              />
            </div>
            <h3 className="team-name">Warriors</h3>
            <p className="team-game">CS2 • EU</p>
            <div className="team-stats">
              <div className="team-stat">
                <span className="stat-label">Victoires</span>
                <span className="stat-value">98</span>
              </div>
              <div className="team-stat">
                <span className="stat-label">Taux de victoire</span>
                <span className="stat-value">71%</span>
              </div>
            </div>
            <Link href="/profile" className="team-button">Voir le profil</Link>
          </div>

          {/* Team 6 */}
          <div className="team-card">
            <div className="team-rank">
              <span className="rank-number">#2</span>
            </div>
            <div className="team-logo">
              <img
                src="/lightning-esport-team-logo-with-pink-neon.jpg"
                alt="Lightning Bolt"
              />
            </div>
            <h3 className="team-name">Lightning Bolt</h3>
            <p className="team-game">CS2 • EU</p>
            <div className="team-stats">
              <div className="team-stat">
                <span className="stat-label">Victoires</span>
                <span className="stat-value">89</span>
              </div>
              <div className="team-stat">
                <span className="stat-label">Taux de victoire</span>
                <span className="stat-value">68%</span>
              </div>
            </div>
            <Link href="/profile" className="team-button">Voir le profil</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
