"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

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
    <main className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Connexion</h2>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="auth-input-group">
            <label className="auth-label">Adresse Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Exemple: playerone@gmail.com"
              className="auth-input"
              required
            />
          </div>

          <div className="auth-input-group">
            <label className="auth-label">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              className="auth-input"
              required
            />
          </div>
          
          {message && (
            <div className="auth-status success">
              {message}
            </div>
          )}

          {error && (
            <div className="auth-status error">
              {error}
            </div>
          )}

          <button type="submit" className="auth-btn" disabled={loading}>
            <span>{loading ? "Connexion..." : "Se connecter"}</span>
            {!loading && (
              <svg
                className="auth-btn-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            )}
          </button>
        </form>

        <p className="auth-footer-text">
          Pas encore inscrit ?{" "}
          <Link href="/sign-up" className="auth-link">
            Créer un compte
            <svg
              className="auth-btn-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ width: "16px", height: "16px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </Link>
        </p>
      </div>
    </main>
  );
}
