import Link from "next/link";

export default function News() {
  return (
    <section id="news" className="section" style={{ paddingTop: "120px" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Dernières actualités</h2>
          <p className="section-description">
            Restez informé des dernières nouvelles
          </p>
        </div>
        <div className="news-grid">
          {/* Card 1 */}
          <div className="news-card">
            <div className="news-image">
              <img
                src="/CyberpunkEsport.jpg"
                alt="Final Showdown"
              />
              <div className="news-category">Tournois</div>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="news-date">3 Février 2025</span>
                <span className="news-read-time">4 min de lecture</span>
              </div>
              <h3 className="news-title">
                Final Showdown : une finale explosive à Tokyo
              </h3>
              <p className="news-excerpt">
                Le match entre ShadowStrike et Neon Vipers a tenu toutes ses
                promesses, avec une remontée spectaculaire en dernière manche.
              </p>
              <Link href="/news/article" className="news-link">
                <span>Lire la suite</span>
                <svg
                  className="link-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="news-card">
            <div className="news-image">
              <img src="/NovaKeyboard.jpg" alt="Nova Player" />
              <div className="news-category">Joueurs</div>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="news-date">21 Mars 2025</span>
                <span className="news-read-time">5 min de lecture</span>
              </div>
              <h3 className="news-title">
                Nova : portrait d’un prodige du clavier
              </h3>
              <p className="news-excerpt">
                À seulement 17 ans, Nova fait déjà trembler les vétérans et
                s'impose comme le futur visage de l'e-sport.
              </p>
              <Link href="/news/article" className="news-link">
                <span>Lire la suite</span>
                <svg
                  className="link-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="news-card">
            <div className="news-image">
              <img
                src="/esport-team-celebration-with-purple-neon.jpg"
                alt="Phoenix Rising"
              />
              <div className="news-category">Équipes</div>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="news-date">10 Janvier 2025</span>
                <span className="news-read-time">3 min de lecture</span>
              </div>
              <h3 className="news-title">Phoenix Rising remporte le Winter Cup</h3>
              <p className="news-excerpt">
                L'équipe européenne domine la compétition et s'impose comme
                favorite pour le Championship Series.
              </p>
              <Link href="/news/article" className="news-link">
                <span>Lire la suite</span>
                <svg
                  className="link-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="news-card">
            <div className="news-image">
              <img src="/Team Eclipse annonce une nouvelle formation.jpg" alt="Team Eclipse" />
              <div className="news-category">Équipes</div>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="news-date">5 Avril 2025</span>
                <span className="news-read-time">2 min de lecture</span>
              </div>
              <h3 className="news-title">
                Team Eclipse annonce une nouvelle formation
              </h3>
              <p className="news-excerpt">
                Avec deux nouveaux joueurs recrutés, Eclipse redéfinit son style
                et vise haut pour la saison à venir.
              </p>
              <Link href="/news/article" className="news-link">
                <span>Lire la suite</span>
                <svg
                  className="link-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="news-card">
            <div className="news-image">
              <img src="/When AI boosts professional training.jpg" alt="Gaming AI" />
              <div className="news-category">Technologie</div>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="news-date">28 Mai 2025</span>
                <span className="news-read-time">3 min de lecture</span>
              </div>
              <h3 className="news-title">
                Quand l’IA booste l'entraînement des pros
              </h3>
              <p className="news-excerpt">
                Les intelligences artificielles révolutionnent la manière dont
                les équipes s'entraînent et s'améliorent.
              </p>
              <Link href="/news/article" className="news-link">
                <span>Lire la suite</span>
                <svg
                  className="link-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="news-card">
            <div className="news-image">
              <img
                src="/esports-world-cup-2025.jpg"
                alt="Esports World Cup 2025"
              />
              <div className="news-category">eSport</div>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="news-date">15 Octobre 2025</span>
                <span className="news-read-time">4 min de lecture</span>
              </div>
              <h3 className="news-title">
                L’Esports World Cup 2025 électrise la scène mondiale
              </h3>
              <p className="news-excerpt">
                Le plus grand tournoi d’eSport de l’année rassemble les
                meilleures équipes de la planète pour un spectacle inoubliable à
                Séoul.
              </p>
              <Link href="/news/article" className="news-link">
                <span>Lire la suite</span>
                <svg
                  className="link-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
