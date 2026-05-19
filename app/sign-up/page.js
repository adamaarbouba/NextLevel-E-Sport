"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./signup.module.css";

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

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (res.ok) {
        const userData = await res.json();
        localStorage.setItem("user", JSON.stringify(userData));
        window.dispatchEvent(new Event("authChange"));
        setMessage("Inscription réussie ! Redirection...");
        setTimeout(() => {
          router.push("/profile");
        }, 500);
      } else {
        const errData = await res.json();
        setError(errData.message || "Erreur lors de la création du compte.");
      }
    } catch (err) {
      console.error(err);
      setError("Impossible de contacter le serveur d'authentification.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.authContainer}>
      <div className={styles.authCard} style={{ maxWidth: "550px" }}>
        <h2 className={styles.authTitle}>Inscription</h2>

        <form onSubmit={handleSignUp} className={styles.authForm}>
          <div className={styles.authRow}>
            <div className={styles.authInputGroup}>
              <label className={styles.authLabel}>Prénom</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Votre prénom"
                className={styles.authInput}
                required
              />
            </div>

            <div className={styles.authInputGroup}>
              <label className={styles.authLabel}>Nom</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Votre nom de famille"
                className={styles.authInput}
                required
              />
            </div>
          </div>

          <div className={styles.authInputGroup}>
            <label className={styles.authLabel}>Adresse Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Exemple: playerone@gmail.com"
              className={styles.authInput}
              required
            />
          </div>

          <div className={styles.authInputGroup}>
            <label className={styles.authLabel}>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Créer un mot de passe robuste"
              className={styles.authInput}
              required
            />
          </div>

          <div className={styles.authInputGroup}>
            <label className={styles.authLabel}>Confirmer le mot de passe</label>
            <input
              type="password"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              placeholder="Répétez votre mot de passe"
              className={styles.authInput}
              required
            />
          </div>

          {error && (
            <div className={`${styles.authStatus} ${styles.error}`}>
              {error}
            </div>
          )}

          {message && (
            <div className={`${styles.authStatus} ${styles.success}`}>
              {message}
            </div>
          )}

          <button type="submit" className={styles.authBtn} disabled={loading}>
            <span>{loading ? "Inscription..." : "S'inscrire"}</span>
            {!loading && (
              <svg
                className={styles.authBtnIcon}
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

        <p className={styles.authFooterText}>
          Déjà inscrit ?{" "}
          <Link href="/login" className={styles.authLink}>
            Se connecter
            <svg
              className={styles.authBtnIcon}
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
