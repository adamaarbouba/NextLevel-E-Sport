import Link from "next/link";

export default function SignUp() {
  return (
    <main className="main">
      <h2 className="newsletter-title">Sign Up</h2>
      <div className="sign-up">
        <div className="in-block">
          <div className="Sign-2block">
            <input
              type="text"
              placeholder="First Name"
              className="input-short"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              className="input-short"
              required
            />
          </div>
          <div className="Sign-block">
            <input
              type="email"
              placeholder="Example@email.com"
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
          <div className="Sign-block">
            <input
              type="password"
              placeholder="Verify Your Password"
              className="input-long"
              required
            />
          </div>
          <div className="blocking">
            <button type="submit" className="btnS">
              <span>Sign Up</span>
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
          <div className="blocking">
            <p className="p-in-S">Already signed up ?</p>

            <Link href="/login">
              <button type="button" className="btnS">
                <span>Login</span>
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
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
