"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./login.module.css";

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

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const userData = await res.json();
        localStorage.setItem("user", JSON.stringify(userData));
        window.dispatchEvent(new Event("authChange"));
        setMessage("Connexion réussie ! Redirection...");
        setTimeout(() => {
          router.push("/profile");
        }, 500);
      } else {
        const errData = await res.json();
        setError(errData.message || "Email ou mot de passe incorrect.");
      }
    } catch (err) {
      console.error(err);
      setError("Impossible de contacter le serveur d'authentification.");
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = () => {
    setLoading(true);
    setMessage("");
    setError("");

    setTimeout(() => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: "guest@nextlevel.gg",
          username: "Jaquan (Invité)",
          firstName: "Jaquan",
          lastName: "Guest",
        })
      );
      window.dispatchEvent(new Event("authChange"));
      setLoading(false);
      setMessage("Connexion en tant qu'invité... Redirection...");
      setTimeout(() => {
        router.push("/profile");
      }, 500);
    }, 800);
  };

  return (
    <main className={styles.authContainer}>
      <div className={styles.authCard}>
        <h2 className={styles.authTitle}>Connexion</h2>

        <form onSubmit={handleLogin} className={styles.authForm}>
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
              placeholder="Entrez votre mot de passe"
              className={styles.authInput}
              required
            />
          </div>
          
          {message && (
            <div className={`${styles.authStatus} ${styles.success}`}>
              {message}
            </div>
          )}

          {error && (
            <div className={`${styles.authStatus} ${styles.error}`}>
              {error}
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <button type="submit" className={styles.authBtn} disabled={loading}>
              <span>{loading ? "Connexion..." : "Se connecter"}</span>
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

            <button
              type="button"
              onClick={handleGuestLogin}
              className={styles.authBtnSecondary}
              disabled={loading}
            >
              <span>Accès Démo / Invité</span>
            </button>
          </div>
        </form>

        <p className={styles.authFooterText}>
          Pas encore inscrit ?{" "}
          <Link href="/sign-up" className={styles.authLink}>
            Créer un compte
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
