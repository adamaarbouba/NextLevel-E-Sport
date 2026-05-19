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
    <main className="main" style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h2 className="newsletter-title" style={{ marginBottom: "2rem" }}>Sign Up</h2>
      <div className="sign-up" style={{ width: "100%", maxWidth: "550px" }}>
        <form onSubmit={handleSignUp} className="in-block" style={{ width: "100%" }}>
          <div className="Sign-2block">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="input-short"
              required
            />

            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="input-short"
              required
            />
          </div>
          <div className="Sign-block" style={{ marginTop: "1rem" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Example@email.com"
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
          <div className="Sign-block" style={{ marginTop: "1rem" }}>
            <input
              type="password"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              placeholder="Verify Your Password"
              className="input-long"
              required
            />
          </div>

          {error && (
            <div style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "1rem", textAlign: "center", fontWeight: "bold" }}>
              {error}
            </div>
          )}

          {message && (
            <div style={{ color: "#3b82f6", fontSize: "0.875rem", marginTop: "1rem", textAlign: "center", fontWeight: "bold" }}>
              {message}
            </div>
          )}

          <div className="blocking" style={{ marginTop: "2rem" }}>
            <button type="submit" className="btnS" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
              <span>{loading ? "Signing up..." : "Sign Up"}</span>
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
          
          <div className="blocking" style={{ marginTop: "1.5rem" }}>
            <p className="p-in-S">Already signed up ?</p>

            <Link href="/login">
              <button type="button" className="btnS" style={{ width: "100%", marginTop: "0.5rem" }}>
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
        </form>
      </div>
    </main>
  );
}
