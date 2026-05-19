export default function Contact() {
  return (
    <main className="main">
      <h2 className="newsletter-title">Contact Us</h2>
      <p className="newsletter-description">
        Inscrivez-vous à notre newsletter pour recevoir les dernières
        actualités, annonces de tournois et offres exclusives.
      </p>

      <form className="newsletter-form">
        <div className="Block">
          <div className="Contact-block">
            <textarea
              placeholder="Your Feedback Is Always Welcome"
              className="input-contact"
              rows={6}
              required
            ></textarea>
          </div>
          <div className="blocking">
            <button type="submit" className="btnS">
              <span>Submit</span>
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
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
