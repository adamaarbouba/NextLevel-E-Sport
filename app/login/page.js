"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Simulate API delay
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email, username: email.split("@")[0] }));
      window.dispatchEvent(new Event("authChange"));
      setLoading(false);
      setMessage("Connexion réussie ! Redirection...");
      setTimeout(() => {
        router.push("/profile");
      }, 500);
    }, 1000);
  };

  return (
    <main className="main" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h2 className="newsletter-title" style={{ marginBottom: "2rem" }}>Log in</h2>

      <form onSubmit={handleLogin} className="newsletter-form" style={{ width: "100%", maxWidth: "450px" }}>
        <div className="Block">
          <div className="Sign-block">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Example@email.com"
              className="input-long"
              required
            />
          </div>
          <div className="Sign-block" style={{ marginTop: "1rem" }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="input-long"
              required
            />
          </div>
          
          {message && (
            <div style={{ color: "#3b82f6", fontSize: "0.875rem", marginTop: "1rem", textAlign: "center", fontWeight: "bold" }}>
              {message}
            </div>
          )}

          <div className="blocking" style={{ marginTop: "2rem" }}>
            <button type="submit" className="btnS" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
              <span>{loading ? "Logging in..." : "Submit"}</span>
              {!loading && (
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
              )}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
