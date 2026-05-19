"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./live.module.css";

export default function Live() {
  const [messages, setMessages] = useState([
    { id: 1, user: "AlphaGamer", text: "Phoenix Rising est trop chaud ce soir !", time: "14:55", self: false },
    { id: 2, user: "Katarina_3", text: "Allez SHD !! Ne perdez pas espoir !", time: "14:56", self: false },
    { id: 3, user: "EsportFanatic", text: "Quel round incroyable sur Overwatch !", time: "14:56", self: false },
    { id: 4, user: "DarkKnight", text: "Le live bug pas chez vous ?", time: "14:57", self: false },
    { id: 5, user: "Mod_Gamer", text: "Non tout est fluide en 1080p60 :)", time: "14:57", self: false },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: Date.now(),
      user: "Vous",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      self: true,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText("");
  };

  return (
    <main className="main" style={{ minHeight: "100vh", display: "flex", justifyContent: "center" }}>
      <div className={styles.liveGrid}>
        {/* Left Side: Stream Video Container */}
        <div className={styles.streamContainer}>
          <div style={{ padding: 0, position: "relative", overflow: "hidden", borderRadius: "20px", border: "1px solid rgba(59, 130, 246, 0.3)" }}>
            <video autoPlay controls muted style={{ width: "100%", display: "block" }}>
              <source src="/SupSup.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
          
          <div className={styles.streamMeta}>
            <div className={styles.streamMetaHeader}>
              <h2 className={styles.streamTitle}>Overwatch-2 Worlds Grand Finals</h2>
              <div className={styles.streamStatusBadges}>
                <span className={styles.badgeLiveStream}>En Direct</span>
                <span className={styles.badgeViewers}>124,582 spectateurs</span>
              </div>
            </div>
            <p className={styles.streamDescription}>
              Le choc des titans entre Phoenix Rising et Shadow Syndicate pour le titre mondial sur Overwatch 2. Suivez l'affrontement final en haute définition et commentez en temps réel avec la communauté.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Chat Sidebar */}
        <div className={styles.liveChatPanel}>
          <div className={styles.chatHeader}>
            <h3 className={styles.chatHeaderTitle}>Chat en direct</h3>
            <span style={{ fontSize: "0.75rem", color: "#a0a0a0" }}>● Compétition</span>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((msg) => (
              <div key={msg.id} className={`${styles.chatMessage} ${msg.self ? styles.self : ""}`}>
                <div className={styles.chatMessageMeta}>
                  <span className={styles.chatUser}>{msg.user}</span>
                  <span className={styles.chatTime}>{msg.time}</span>
                </div>
                <p className={styles.chatText}>{msg.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.chatFooter}>
            <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Envoyer un message..."
                className={styles.chatInput}
              />
              <button type="submit" className={styles.chatSendBtn}>
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
