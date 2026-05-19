import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Saison 2025 en cours</span>
            </div>
            <h1 className="hero-title">
              Rejoignez la<br />
              <span className="hero-title-gradient">Compétition</span>
            </h1>
            <p className="hero-description">
              Affrontez les meilleurs joueurs, participez à des tournois épiques
              et devenez une légende de l'e-sport.
            </p>
            <Link href="/tournaments" className="hero-button">
              <span>Découvrir les tournois</span>
              <svg
                className="button-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </Link>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">500K+</div>
                <div className="stat-label">Joueurs actifs</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">200+</div>
                <div className="stat-label">Tournois</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">$20M+</div>
                <div className="stat-label">Prize Pool</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-bg"></div>
        <div className="about-overlay"></div>
        <div className="container about-container">
          <div className="about-content">
            <h1 className="about-title">
              About <span className="about-title-gradient">Us</span>
            </h1>
            <p className="about-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              laudantium illum iusto dolorum enim pariatur unde, earum vero
              explicabo ab, voluptates voluptatem, laborum minima dolore
              doloremque eum sed doloribus vel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
