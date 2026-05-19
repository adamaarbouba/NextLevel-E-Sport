"use client";

import { useState } from "react";

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
    <main className="main" style={{ minHeight: "85vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h2 className="newsletter-title" style={{ marginBottom: "0.5rem" }}>Contact Us</h2>
      <p className="newsletter-description" style={{ marginBottom: "2.5rem", maxWidth: "500px", textAlign: "center" }}>
        Votre avis nous intéresse. Envoyez-nous un message et notre équipe vous répondra dans les plus brefs délais.
      </p>

      <form onSubmit={handleSubmit} className="newsletter-form" style={{ width: "100%", maxWidth: "500px" }}>
        <div className="Block">
          <div className="Sign-block" style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="input-long"
              required
            />
          </div>
          <div className="Sign-block" style={{ marginBottom: "1rem" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="input-long"
              required
            />
          </div>
          <div className="Contact-block">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message..."
              className="input-contact"
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

          <div className="blocking" style={{ marginTop: "2rem" }}>
            <button type="submit" className="btnS" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
              <span>{loading ? "Sending..." : "Submit"}</span>
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
