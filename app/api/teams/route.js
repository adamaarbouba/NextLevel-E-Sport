import { NextResponse } from "next/server";

const teams = [
  {
    id: 1,
    rank: 1,
    name: "Phoenix Rising",
    game: "Valorant",
    logo: "/Phoneix_Rising.png",
    wins: 48,
    losses: 12,
  },
  {
    id: 2,
    rank: 2,
    name: "The Spartio",
    game: "League of Legends",
    logo: "/The Spartio.png",
    wins: 45,
    losses: 15,
  },
  {
    id: 3,
    rank: 3,
    name: "Dragon Force",
    game: "Counter Strike 2",
    logo: "/Dragon_Force.png",
    wins: 42,
    losses: 18,
  },
  {
    id: 4,
    rank: 4,
    name: "Wolves",
    game: "Overwatch 2",
    logo: "/WolfTeam.png",
    wins: 38,
    losses: 22,
  },
  {
    id: 5,
    rank: 5,
    name: "Warriors",
    game: "Rocket League",
    logo: "/Warriors.png",
    wins: 35,
    losses: 25,
  },
  {
    id: 6,
    rank: 6,
    name: "Lightning Bolt",
    game: "Marvel Rivals",
    logo: "/lightning-esport-team-logo-with-pink-neon.jpg",
    wins: 31,
    losses: 29,
  },
];

export async function GET() {
  return NextResponse.json(teams);
}
