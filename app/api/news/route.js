import { NextResponse } from "next/server";

const news = [
  {
    id: 1,
    title: "Mise à jour majeure de la Saison 2026",
    category: "Mise à jour",
    date: "10 Jan 2026",
    author: "Staff E-Sport",
    excerpt: "Découvrez toutes les nouveautés concernant la nouvelle saison compétitive, y compris les nouveaux formats de tournois et les dotations accrues.",
    image: "/CyberpunkEsport.jpg",
    slug: "saison-2026-patch",
  },
  {
    id: 2,
    title: "Phoenix Rising remporte le Major de Printemps",
    category: "Tournoi",
    date: "08 Jan 2026",
    author: "Jean E-Sport",
    excerpt: "Après une finale d'anthologie, Phoenix Rising s'impose face à Shadow Syndicate et décroche le premier titre de l'année.",
    image: "/esport-team-celebration-with-purple-neon.jpg",
    slug: "phoenix-rising-champions",
  },
  {
    id: 3,
    title: "Mercato : Transferts majeurs annoncés",
    category: "Transfert",
    date: "05 Jan 2026",
    author: "Lucas News",
    excerpt: "Le marché des transferts s'agite avec l'arrivée de nouveaux talents au sein des équipes leaders de la ligue.",
    image: "/Team Eclipse annonce une nouvelle formation.jpg",
    slug: "mercato-transferts-news",
  },
];

export async function GET() {
  return NextResponse.json(news);
}
