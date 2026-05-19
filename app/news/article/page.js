"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "../news.module.css";

function ArticleContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch("/api/news");
        if (res.ok) {
          const data = await res.json();
          setArticles(data);
        }
      } catch (err) {
        console.error("Failed to load articles", err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", color: "#a0a0a0", padding: "10rem 2rem" }}>
        Chargement de l'article...
      </div>
    );
  }

  // Default to the first article if no slug is provided or found
  const activeArticle = articles.find((a) => a.slug === slug) || articles[0];

  if (!activeArticle) {
    return (
      <div style={{ textAlign: "center", color: "#a0a0a0", padding: "10rem 2rem" }}>
        <p>Article non trouvé.</p>
        <Link href="/news" className={styles.backBtn} style={{ marginTop: "2rem" }}>
          Retour aux actualités
        </Link>
      </div>
    );
  }

  // Filter other articles to show in the sidebar (trending/other news)
  const otherArticles = articles.filter((a) => a.slug !== activeArticle.slug);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0a0a0f" }}>
      {/* Cinematic Article Hero Header */}
      <section className={styles.articleHero}>
        <div className={styles.articleHeroBg}>
          <img src={activeArticle.image} alt={activeArticle.title} />
        </div>
        <div className={styles.articleHeroOverlay}></div>
        <div className={styles.articleHeroContainer}>
          <Link href="/news" className={styles.backBtn}>
            <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour aux actualités
          </Link>

          <div className={styles.articleHeroBadges}>
            <span className={styles.categoryTag}>{activeArticle.category}</span>
            <span className={styles.gameTag}>{activeArticle.game || "Général"}</span>
          </div>

          <h1 className={styles.articleHeroTitle}>{activeArticle.title}</h1>

          <div className={styles.articleHeroMeta}>
            <div className={styles.authorBox}>
              <div className={styles.authorAvatar}>
                {activeArticle.author ? activeArticle.author[0] : "S"}
              </div>
              <div>
                <span style={{ fontSize: "0.8rem", color: "#a0a0a0", display: "block" }}>Rédigé par</span>
                <span className={styles.authorName}>{activeArticle.author || "Staff E-Sport"}</span>
              </div>
            </div>
            <div className={styles.metaItem}>
              <svg className={styles.metaIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{activeArticle.date}</span>
            </div>
            <div className={styles.metaItem}>
              <svg className={styles.metaIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{activeArticle.readTime || "5 min read"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body + Sidebar Layout */}
      <section className={styles.articleLayout}>
        {/* Main article copy */}
        <div className={styles.articleBody}>
          {activeArticle.content && activeArticle.content.map((paragraph, index) => (
            <p
              key={index}
              className={`${styles.paragraph} ${index === 0 ? styles.dropCap : ""}`}
            >
              {paragraph}
            </p>
          ))}

          {/* Stylized Blockquote decoration */}
          <blockquote className={styles.articleQuote}>
            <p className={styles.quoteText}>
              "Chaque saison e-sportive apporte son lot de surprises, mais l'année 2026 s'annonce définitivement comme un tournant compétitif sans précédent."
            </p>
            <span className={styles.quoteAuthor}>— Directeur des compétitions, NextLevel</span>
          </blockquote>

          <p className={styles.paragraph}>
            Restez connectés sur NextLevel E-Sport pour suivre toutes les retransmissions en direct, consulter les fiches détaillées des équipes et obtenir les analyses de nos experts en temps réel.
          </p>
        </div>

        {/* Sidebar Area */}
        <aside className={styles.sidebarWrapper}>
          {/* Other Trending News Section */}
          {otherArticles.length > 0 && (
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Actualités Populaires</h3>
              <div className={styles.trendingNewsList}>
                {otherArticles.map((art) => (
                  <Link
                    key={art.id}
                    href={`/news/article?slug=${art.slug}`}
                    className={styles.trendingCard}
                  >
                    <div className={styles.trendingThumb}>
                      <img src={art.image} alt={art.title} />
                    </div>
                    <div className={styles.trendingInfo}>
                      <span className={styles.trendingMeta}>{art.category}</span>
                      <h4 className={styles.trendingTitle}>{art.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Discord & Newsletter Call to action */}
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Rejoindre l'Elite</h3>
            <p className={styles.newsletterText}>
              Inscrivez-vous à notre newsletter hebdomadaire pour recevoir en exclusivité les codes promos de tournois, les statistiques de joueurs et les transferts secrets.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Merci pour votre inscription !"); }} style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="email"
                required
                placeholder="Votre adresse email"
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterSubmit}>
                S'abonner
              </button>
            </form>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default function Article() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", color: "#a0a0a0", padding: "10rem" }}>Chargement...</div>}>
      <ArticleContent />
    </Suspense>
  );
}
