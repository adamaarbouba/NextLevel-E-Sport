"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setFeedback(data.message);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(data.error || "Une erreur s'est produite.");
      }
    } catch (err) {
      setError("Impossible de contacter le serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.contactMain}>
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.description}>
        Votre avis nous intéresse. Envoyez-nous un message et notre équipe vous répondra dans les plus brefs délais.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.block}>
          <div className={styles.signBlock}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className={styles.inputLong}
              required
            />
          </div>
          <div className={styles.signBlock}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className={styles.inputLong}
              required
            />
          </div>
          <div className={styles.contactBlock}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message..."
              className={styles.inputContact}
              rows={6}
              required
            ></textarea>
          </div>

          {feedback && (
            <div style={{ color: "#10b981", fontSize: "0.9rem", marginTop: "1rem", textAlign: "center", fontWeight: "bold" }}>
              {feedback}
            </div>
          )}

          {error && (
            <div style={{ color: "#ef4444", fontSize: "0.9rem", marginTop: "1rem", textAlign: "center", fontWeight: "bold" }}>
              {error}
            </div>
          )}

          <div className={styles.blocking}>
            <button type="submit" className={styles.btnS} disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
              <span>{loading ? "Sending..." : "Submit"}</span>
              {!loading && (
                <svg
                  className={styles.buttonIcon}
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
