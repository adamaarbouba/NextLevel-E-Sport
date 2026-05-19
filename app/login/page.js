export default function Login() {
  return (
    <main className="main">
      <h2 className="newsletter-title">Log in</h2>

      <form className="newsletter-form">
        <div className="Block">
          <div className="Sign-block">
            <input
              type="email"
              placeholder="Your Example@email.com"
              className="input-long"
              required
            />
          </div>
          <div className="Sign-block">
            <input
              type="password"
              placeholder="Your password"
              className="input-long"
              required
            />
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
