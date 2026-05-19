export default function Profile() {
  return (
    <section id="news" className="section" style={{ paddingTop: "120px" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Profile</h2>
          <p className="section-description">Personal status / Team Status</p>
        </div>
        <div className="container">
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
                <span className="stat-label">Titels</span>
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
              <span className="stat-label">Favorate Weapon</span>
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
              <span className="stat-label">Favorate Weapon</span>
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
              <span className="stat-label">Favorate Weapon</span>
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
