"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== verifyPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
          username: `${firstName} ${lastName}`,
          firstName,
          lastName,
        })
      );
      window.dispatchEvent(new Event("authChange"));
      setLoading(false);
      setMessage("Inscription réussie ! Redirection...");
      setTimeout(() => {
        router.push("/profile");
      }, 500);
    }, 1000);
  };

  return (
    <main className="auth-container">
      <div className="auth-card" style={{ maxWidth: "550px" }}>
        <h2 className="auth-title">Inscription</h2>

        <form onSubmit={handleSignUp} className="auth-form">
          <div className="auth-row">
            <div className="auth-input-group">
              <label className="auth-label">Prénom</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Votre prénom"
                className="auth-input"
                required
              />
            </div>

            <div className="auth-input-group">
              <label className="auth-label">Nom</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Votre nom de famille"
                className="auth-input"
                required
              />
            </div>
          </div>

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
              placeholder="Créer un mot de passe robuste"
              className="auth-input"
              required
            />
          </div>

          <div className="auth-input-group">
            <label className="auth-label">Confirmer le mot de passe</label>
            <input
              type="password"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              placeholder="Répétez votre mot de passe"
              className="auth-input"
              required
            />
          </div>

          {error && (
            <div className="auth-status error">
              {error}
            </div>
          )}

          {message && (
            <div className="auth-status success">
              {message}
            </div>
          )}

          <button type="submit" className="auth-btn" disabled={loading}>
            <span>{loading ? "Inscription..." : "S'inscrire"}</span>
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
          Déjà inscrit ?{" "}
          <Link href="/login" className="auth-link">
            Se connecter
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
