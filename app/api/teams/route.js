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
    name: "Shadow Syndicate",
    game: "League of Legends",
    logo: "/ShadowSyndicate.png",
    wins: 45,
    losses: 15,
  },
  {
    id: 3,
    rank: 3,
    name: "Apex Vanguard",
    game: "Counter Strike 2",
    logo: "/ApexVanguard.png",
    wins: 42,
    losses: 18,
  },
  {
    id: 4,
    rank: 4,
    name: "Quantum Esports",
    game: "Overwatch 2",
    logo: "/QuantumEsport.png",
    wins: 38,
    losses: 22,
  },
  {
    id: 5,
    rank: 5,
    name: "Hyperion Club",
    game: "Rocket League",
    logo: "/HyperionClub.png",
    wins: 35,
    losses: 25,
  },
  {
    id: 6,
    rank: 6,
    name: "Neon Genesis",
    game: "Marvel Rivals",
    logo: "/NeonGenesis.png",
    wins: 31,
    losses: 29,
  },
];

export async function GET() {
  return NextResponse.json(teams);
}
