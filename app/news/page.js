"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./news.module.css";

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

  // Determine if we show a featured article at the top (only on initial list view)
  const isDefaultView = searchQuery.trim() === "" && selectedTag === "Tous";
  const featuredArticle = isDefaultView && filteredNews.length > 0 ? filteredNews[0] : null;
  const gridArticles = featuredArticle ? filteredNews.slice(1) : filteredNews;

  return (
    <section id="news" className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Actualités E-Sport</h2>
          <p className={styles.sectionDescription}>
            Suivez les derniers patchs, résultats de tournois et actualités de transferts.
          </p>
        </div>

        {/* Featured Article Spotlight */}
        {featuredArticle && !loading && (
          <div className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <img src={featuredArticle.image} alt={featuredArticle.title} />
              <span className={styles.featuredBadge}>{featuredArticle.category}</span>
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredGameBadge}>{featuredArticle.game || "E-Sport"}</span>
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span>{featuredArticle.readTime || "5 min read"}</span>
              </div>
              <h3 className={styles.featuredTitle}>{featuredArticle.title}</h3>
              <p className={styles.featuredExcerpt}>{featuredArticle.excerpt}</p>
              <Link href={`/news/article?slug=${featuredArticle.slug}`} className={styles.featuredBtn}>
                Lire l'article
                <svg
                  style={{ width: "16px", height: "16px" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* Filters and Search Bar - UI Redesign & Rearrangement */}
        <div className={styles.newsFilterWrapper}>
          <div className={styles.newsSearchBox}>
            <svg
              className={styles.newsSearchIcon}
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
              className={styles.newsSearchInput}
            />
          </div>

          <div className={styles.newsTagPills}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`${styles.newsTagPill} ${selectedTag === cat ? styles.active : ""}`}
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
        ) : gridArticles.length === 0 && !featuredArticle ? (
          <div style={{ textAlign: "center", color: "#a0a0a0", padding: "3rem" }}>
            Aucun article ne correspond à votre recherche.
          </div>
        ) : (
          <div className={styles.newsGrid}>
            {gridArticles.map((item) => (
              <div key={item.id} className={styles.newsCard}>
                <div className={styles.newsImage}>
                  <img src={item.image} alt={item.title} />
                  <span className={styles.newsBadge}>{item.category}</span>
                </div>
                <div className={styles.newsContent}>
                  <div className={styles.newsMeta}>
                    <span style={{ color: "#3b82f6", fontWeight: "700" }}>{item.game || "Général"}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                  <p className={styles.newsDescription}>{item.excerpt}</p>
                  <Link href={`/news/article?slug=${item.slug}`} className={styles.newsLink}>
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
