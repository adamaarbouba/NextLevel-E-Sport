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
  },
];

export async function GET() {
  return NextResponse.json(tournaments);
}
