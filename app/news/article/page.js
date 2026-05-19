export default function Article() {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Final Showdown : une finale explosive à Tokyo</span>
            </div>
            <h1 className="hero-title">
              NextLevel<br />
              <span className="hero-title-gradient">Articals</span>
            </h1>

            <div className="main" style={{ padding: "40px 0" }}>
              <h3 className="news-title" style={{ marginBottom: "20px" }}>
                Final Showdown : Une finale explosive à Tokyo
              </h3>

              <p className="hero-description">
                Le choc tant attendu entre ShadowStrike et Neon Vipers a tenu
                toutes ses promesses lors de la grande finale à Tokyo. Dès le
                départ, ShadowStrike a dominé le match, menant 3-1 grâce à une
                défense solide et un jeu collectif bien rôdé.
              </p>
              <h3 className="news-title" style={{ marginTop: "40px", marginBottom: "20px" }}>
                Une remontée légendaire
              </h3>

              <p className="hero-description">
                Mais dans une dernière manche incroyable, les Neon Vipers ont
                renversé la situation. Portés par la jeune star Akiro, ils ont
                enchaîné les actions spectaculaires pour finalement s’imposer
                4-3. Une victoire inoubliable qui entre déjà dans la légende du
                tournoi Final Showdown.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
