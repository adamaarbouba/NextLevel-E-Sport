import Link from "next/link";

export default function Tournaments() {
  return (
    <section id="tournaments" className="section" style={{ paddingTop: "120px" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tournaments</h2>
          <p className="section-description">
            Watch the Best E-Sport Battles Unfold Infront Of You Live on
            NextLevel E-Sport Now.
          </p>
        </div>
        <div className="tournaments-grid">
          {/* Card 1 */}
          <div className="tournament-card">
            <div className="tournament-image">
              <img
                src="/OverwatchGrandFinal.png"
                alt="Overwatch 2 Championship"
              />
              <div className="tournament-badge live">Watch</div>
            </div>
            <div className="tournament-content">
              <div className="tournament-meta">
                <span className="tournament-game">Overwatch 2</span>
                <span className="tournament-date">15 Jan 2025</span>
              </div>
              <h3 className="tournament-title">Overwatch-2 Worlds</h3>
              <p className="tournament-description">
                World League Battle In Overwatch 2 World NOW.
              </p>
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
                  <span>16 équipes</span>
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
                  <span>$1,000,000</span>
                </div>
              </div>
              <Link href="/live" className="tournament-button">Watch</Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="tournament-card">
            <div className="tournament-image">
              <img src="/ValorantChamp.png" alt="Valorant Championship" />
              <div className="tournament-badge live">Watch</div>
            </div>
            <div className="tournament-content">
              <div className="tournament-meta">
                <span className="tournament-game">Valorant</span>
                <span className="tournament-date">15 Jan 2025</span>
              </div>
              <h3 className="tournament-title">Valorant VCT 2025</h3>
              <p className="tournament-description">Alpha-Omega Who's gonna Win.</p>
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
                  <span>8 équipes</span>
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
                  <span>$5,000,000</span>
                </div>
              </div>
              <Link href="/live" className="tournament-button">Watch</Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="tournament-card">
            <div className="tournament-image">
              <img
                src="/LolWorldcup.png"
                alt="League of legends Championship"
              />
              <div className="tournament-badge live">Watch</div>
            </div>
            <div className="tournament-content">
              <div className="tournament-meta">
                <span className="tournament-game">League OF Legends</span>
                <span className="tournament-date">15 Jan 2025</span>
              </div>
              <h3 className="tournament-title">Worlds Championship</h3>
              <p className="tournament-description">
                Fight for the Crown And win the World NOW.
              </p>
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
                  <span>17 équipes</span>
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
                  <span>$5,000,000</span>
                </div>
              </div>
              <Link href="/live" className="tournament-button">Watch</Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="tournament-card">
            <div className="tournament-image">
              <img src="/CounterStrikeChamp.png" alt="Counter Strike 2" />
              <div className="tournament-badge upcoming">Upcoming</div>
            </div>
            <div className="tournament-content">
              <div className="tournament-meta">
                <span className="tournament-game">Counter Strike 2</span>
                <span className="tournament-date">22 Jan 2025</span>
              </div>
              <h3 className="tournament-title">Spring Split Finals</h3>
              <p className="tournament-description">
                The Final Battle Before the Big ShowDown.
              </p>
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
                  <span>8 équipes</span>
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
                  <span>$250,000</span>
                </div>
              </div>
              <a href="#" className="tournament-button">Notify Me</a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="tournament-card">
            <div className="tournament-image">
              <img src="/RocketleagueCup.png" alt="Rocket League" />
              <div className="tournament-badge upcoming">Upcoming</div>
            </div>
            <div className="tournament-content">
              <div className="tournament-meta">
                <span className="tournament-game">Rocket League</span>
                <span className="tournament-date">5 Fév 2025</span>
              </div>
              <h3 className="tournament-title">Championship Tour</h3>
              <p className="tournament-description">
                The best Teams in Europe Fight For the Golden Ticket NOW.
              </p>
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
                  <span>12 équipes</span>
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
                  <span>$1,000,000</span>
                </div>
              </div>
              <a href="#" className="tournament-button">Notify Me</a>
            </div>
          </div>

          {/* Card 6 */}
          <div className="tournament-card">
            <div className="tournament-image">
              <img src="/MarvilRivalsCamp.png" alt="Marvel Rivals" />
              <div className="tournament-badge upcoming">Upcoming</div>
            </div>
            <div className="tournament-content">
              <div className="tournament-meta">
                <span className="tournament-game">Marvel Rivals</span>
                <span className="tournament-date">28 Jan 2025</span>
              </div>
              <h3 className="tournament-title">Major Qualifiers</h3>
              <p className="tournament-description">
                Who's Gonna be the best Team of Super-Heros BE on Garud.
              </p>
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
                  <span>24 équipes</span>
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
                  <span>$1,500,000</span>
                </div>
              </div>
              <a href="#" className="tournament-button">Notify Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
