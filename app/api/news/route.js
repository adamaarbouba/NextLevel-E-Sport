import { NextResponse } from "next/server";

const news = [
  {
    id: 1,
    title: "Mise à jour majeure de la Saison 2026",
    category: "Mise à jour",
    date: "10 Jan 2026",
    author: "Staff E-Sport",
    readTime: "5 min de lecture",
    game: "Général",
    excerpt: "Découvrez toutes les nouveautés concernant la nouvelle saison compétitive, y compris les nouveaux formats de tournois et les dotations accrues.",
    image: "/CyberpunkEsport.jpg",
    slug: "saison-2026-patch",
    content: [
      "La Saison 2026 d’e-sport débute officiellement sous le signe du renouveau. Les organisateurs ont dévoilé hier soir une série de changements structurants visant à dynamiser le circuit professionnel. Au programme : de nouvelles règles de qualification, un calendrier resserré pour éviter la fatigue des joueurs, et une augmentation générale des dotations financières.",
      "L’ajustement majeur concerne le format des qualifications régionales. Désormais, les points de circuit accumulés tout au long de l'année auront un poids double par rapport aux tournois de pré-saison. L'objectif avoué est de récompenser la régularité et d'éviter les qualifications surprises d'équipes en méforme temporaire.",
      "Du côté des cashprizes, l'enveloppe globale franchit un cap historique pour atteindre 20 millions de dollars répartis sur l'ensemble de la saison. Les vainqueurs de chaque Major repartiront avec une part plus importante, mais le bas du classement verra également ses gains sécurisés pour garantir la viabilité économique de toutes les structures participantes."
    ]
  },
  {
    id: 2,
    title: "Phoenix Rising remporte le Major de Printemps",
    category: "Tournoi",
    date: "08 Jan 2026",
    author: "Jean E-Sport",
    readTime: "4 min de lecture",
    game: "Overwatch 2",
    excerpt: "Après une finale d'anthologie, Phoenix Rising s'impose face à Shadow Syndicate et décroche le premier titre de l'année.",
    image: "/esport-team-celebration-with-purple-neon.jpg",
    slug: "phoenix-rising-champions",
    content: [
      "Dans une finale mémorable disputée devant un public survolté à Tokyo, les joueurs de Phoenix Rising ont surclassé Shadow Syndicate pour s'offrir le trophée du Major de Printemps. Malgré un départ hésitant et une défaite sur la première carte de jeu, les champions en titre ont su faire preuve d'un mental d'acier.",
      "Le tournant du match s'est produit lors de la troisième manche. Menés de deux points stratégiques, Phoenix Rising a opéré un changement de composition tactique audacieux qui a totalement déstabilisé la défense adverse. Portés par les actions clutchs de leur capitaine vedette, ils ont enchaîné quatre manches victorieuses consécutives.",
      "Cette consécration confirme la suprématie de la structure Phoenix Rising sur le plan international. Outre le trophée prestigieux, l'équipe empoche la somme record de 500 000 dollars et assure directement sa qualification pour la Grande Finale du Championnat du Monde en fin d'année."
    ]
  },
  {
    id: 3,
    title: "Mercato : Transferts majeurs annoncés",
    category: "Transfert",
    date: "05 Jan 2026",
    author: "Lucas News",
    readTime: "3 min de lecture",
    game: "Valorant",
    excerpt: "Le marché des transferts s'agite avec l'arrivée de nouveaux talents au sein des équipes leaders de la ligue.",
    image: "/Team Eclipse annonce une nouvelle formation.jpg",
    slug: "mercato-transferts-news",
    content: [
      "Le marché des transferts e-sport s'agite comme jamais à l'approche de la reprise. Plusieurs signatures majeures viennent de bousculer la hiérarchie établie, avec des mouvements inattendus qui promettent de relancer l'intérêt des compétitions à venir.",
      "La transaction la plus retentissante est sans conteste l'arrivée du jeune prodige Akiro chez les Neon Vipers. Auteur d'une saison rookie exceptionnelle l'an passé chez Team Eclipse, le joueur de 19 ans a signé un contrat de deux ans pour un montant record. Il aura la lourde tâche de mener sa nouvelle équipe vers le titre suprême.",
      "D'autres mouvements d'envergure ont été confirmés, notamment la restructuration complète du roster de Shadow Syndicate et l'arrivée de deux vétérans pour solidifier leur ligne défensive. La saison s'annonce d'ores et déjà explosive et imprévisible."
    ]
  }
];

export async function GET() {
  return NextResponse.json(news);
}
