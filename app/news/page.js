"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function News() {
  const [newsList, setNewsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("Tous");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news");
        if (res.ok) {
          const data = await res.json();
          setNewsList(data);
        }
      } catch (err) {
        console.error("Failed to fetch news:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  const categories = ["Tous", "Mise à jour", "Tournoi", "Transfert"];

  const filteredNews = newsList.filter((item) => {
    const matchesTag = selectedTag === "Tous" || item.category === selectedTag;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section id="news" className="section section-dark" style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Actualités E-Sport</h2>
          <p className="section-description">
            Suivez les derniers patchs, résultats de tournois et actualités de transferts.
          </p>
        </div>

        {/* Filters and Search Bar - UI Redesign & Rearrangement */}
        <div className="news-filter-wrapper">
          <div className="news-search-box">
            <svg
              className="news-search-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher des articles..."
              className="news-search-input"
            />
          </div>

          <div className="news-tag-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`news-tag-pill ${selectedTag === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", color: "#a0a0a0", padding: "3rem" }}>
            Chargement des actualités...
          </div>
        ) : filteredNews.length === 0 ? (
          <div style={{ textAlign: "center", color: "#a0a0a0", padding: "3rem" }}>
            Aucun article ne correspond à votre recherche.
          </div>
        ) : (
          <div className="news-grid">
            {filteredNews.map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                  <span className="news-badge">{item.category}</span>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.author}</span>
                  </div>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-description">{item.excerpt}</p>
                  <Link href="/news/article" className="news-link">
                    Lire la suite
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
