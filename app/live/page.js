export default function Live() {
  return (
    <main className="main">
      <h2 className="newsletter-title">Live Stream on going!</h2>
      <div className="hero-video">
        <video autoPlay controls muted style={{ width: "100%", borderRadius: "8px" }}>
          <source src="/SupSup.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </main>
  );
}
