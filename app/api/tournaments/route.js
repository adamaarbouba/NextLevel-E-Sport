import { NextResponse } from "next/server";

const tournaments = [
  {
    id: 1,
    title: "Overwatch-2 Worlds",
    game: "Overwatch 2",
    date: "15 Jan 2026",
    status: "live",
    description: "World League Battle In Overwatch 2 World NOW.",
    teamsCount: 16,
    prizePool: "$1,000,000",
    image: "/OverwatchGrandFinal.png",
    format: "Double Élimination, BO5",
    maps: ["Oasis", "King's Row", "Route 66", "Numbani", "Lijiang Tower"],
    schedule: "Aujourd'hui à 18:00 UTC - Demi-Finales",
    bracket: [
      {
        round: "Demi-finales",
        matches: [
          { team1: "Phoenix Rising", score1: 3, team2: "Shadow Syndicate", score2: 2, status: "Terminé" },
          { team1: "The Spartio", score1: 1, team2: "Team Eclipse", score2: 3, status: "Terminé" }
        ]
      },
      {
        round: "Grande Finale",
        matches: [
          { team1: "Phoenix Rising", score1: null, team2: "Team Eclipse", score2: null, status: "En cours" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Valorant VCT 2026",
    game: "Valorant",
    date: "15 Jan 2026",
    status: "live",
    description: "Alpha-Omega Who's gonna Win.",
    teamsCount: 8,
    prizePool: "$5,000,000",
    image: "/ValorantChamp.png",
    format: "Élimination Directe, BO3",
    maps: ["Bind", "Haven", "Ascent", "Split"],
    schedule: "Aujourd'hui à 20:30 UTC - Match d'ouverture",
    bracket: [
      {
        round: "Quarts de finale",
        matches: [
          { team1: "Sentinels", score1: 2, team2: "Fnatic", score2: 0, status: "Terminé" },
          { team1: "Paper Rex", score1: 1, team2: "LOUD", score2: 2, status: "Terminé" }
        ]
      },
      {
        round: "Demi-finales",
        matches: [
          { team1: "Sentinels", score1: null, team2: "LOUD", score2: null, status: "À venir" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Worlds Championship",
    game: "League of Legends",
    date: "15 Jan 2026",
    status: "live",
    description: "Fight for the Crown And win the World NOW.",
    teamsCount: 17,
    prizePool: "$5,000,000",
    image: "/LolWorldcup.png",
    format: "Rounds Suisses & Bracket BO5",
    maps: ["Faille de l'Invocateur"],
    schedule: "Aujourd'hui à 15:00 UTC - Phase de groupes",
    bracket: [
      {
        round: "Phase de Groupes - R5",
        matches: [
          { team1: "T1", score1: 1, team2: "Gen.G", score2: 0, status: "Terminé" },
          { team1: "G2 Esports", score1: 0, team2: "Weibo Gaming", score2: 1, status: "Terminé" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Spring Split Finals",
    game: "Counter Strike 2",
    date: "22 Jan 2026",
    status: "upcoming",
    description: "The Final Battle Before the Big ShowDown.",
    teamsCount: 8,
    prizePool: "$250,000",
    image: "/CounterStrikeChamp.png",
    format: "Double Élimination, BO3",
    maps: ["Mirage", "Inferno", "Nuke", "Anubis", "Ancient"],
    schedule: "22 Jan à 17:00 UTC - Premier Tour",
    bracket: [
      {
        round: "Premier Tour",
        matches: [
          { team1: "Natus Vincere", score1: null, team2: "FaZe Clan", score2: null, status: "À venir" },
          { team1: "Vitality", score1: null, team2: "G2 Esports", score2: null, status: "À venir" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Championship Tour",
    game: "Rocket League",
    date: "05 Feb 2026",
    status: "upcoming",
    description: "The best Teams in Europe Fight For the Golden Ticket NOW.",
    teamsCount: 12,
    prizePool: "$1,000,000",
    image: "/RocketleagueCup.png",
    format: "Ronde Suisse & Élimination Directe",
    maps: ["DFH Stadium", "Mannfield", "Champions Field"],
    schedule: "05 Fév à 16:00 UTC - Ronde 1",
    bracket: [
      {
        round: "Ronde 1",
        matches: [
          { team1: "Karmine Corp", score1: null, team2: "BDS", score2: null, status: "À venir" },
          { team1: "Team Vitality", score1: null, team2: "Gentle Mates", score2: null, status: "À venir" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Major Qualifiers",
    game: "Marvel Rivals",
    date: "28 Jan 2026",
    status: "upcoming",
    description: "Who's Gonna be the best Team of Super-Heros BE on Garud.",
    teamsCount: 24,
    prizePool: "$1,500,000",
    image: "/MarvilRivalsCamp.png",
    format: "Élimination Directe, BO5",
    maps: ["Tokyo 2099", "Asgard", "Yggsgard"],
    schedule: "28 Jan à 19:00 UTC - Phase de Qualif",
    bracket: [
      {
        round: "Qualifiers - Round 1",
        matches: [
          { team1: "Avengers Alliance", score1: null, team2: "Doom Patrol", score2: null, status: "À venir" },
          { team1: "Spider-Guild", score1: null, team2: "X-Force", score2: null, status: "À venir" }
        ]
      }
    ]
  }
];

export async function GET() {
  return NextResponse.json(tournaments);
}
