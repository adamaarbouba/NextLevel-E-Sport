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

// Mock database of rosters
const rosters = {
  1: [
    { name: "Jaquan", role: "Duelist / Capitaine", winrate: "74%", kda: "1.17", img: "/Jaquan.jpg", rank: "#1" },
    { name: "Lokaka", role: "Controller", winrate: "70%", kda: "1.09", img: "/Lokaka.jpg", rank: "#2" },
    { name: "Aalal", role: "Initiator", winrate: "68%", kda: "1.05", img: "/aalal.jpg", rank: "#3" }
  ],
  2: [
    { name: "Faker Jr", role: "Midlaner / Capitaine", winrate: "72%", kda: "1.25", img: "/placeholder-user.jpg", rank: "#1" },
    { name: "Zeus Jr", role: "Toplaner", winrate: "68%", kda: "1.10", img: "/placeholder-user.jpg", rank: "#2" },
    { name: "Oner Jr", role: "Jungler", winrate: "65%", kda: "1.08", img: "/placeholder-user.jpg", rank: "#3" }
  ],
  3: [
    { name: "S1mpleton", role: "AWPer / Capitaine", winrate: "71%", kda: "1.22", img: "/placeholder-user.jpg", rank: "#1" },
    { name: "Zywoo Jr", role: "Entry Fragger", winrate: "69%", kda: "1.15", img: "/placeholder-user.jpg", rank: "#2" },
    { name: "Apex Jr", role: "Rifler", winrate: "64%", kda: "1.02", img: "/placeholder-user.jpg", rank: "#3" }
  ],
  4: [
    { name: "Kevster Jr", role: "DPS / Capitaine", winrate: "66%", kda: "1.15", img: "/placeholder-user.jpg", rank: "#1" },
    { name: "Shu Jr", role: "Support", winrate: "62%", kda: "1.08", img: "/placeholder-user.jpg", rank: "#2" },
    { name: "Fearless Jr", role: "Tank", winrate: "59%", kda: "0.99", img: "/placeholder-user.jpg", rank: "#3" }
  ],
  5: [
    { name: "Zen Jr", role: "Striker / Capitaine", winrate: "65%", kda: "1.20", img: "/placeholder-user.jpg", rank: "#1" },
    { name: "Vatira Jr", role: "Midfielder", winrate: "61%", kda: "1.11", img: "/placeholder-user.jpg", rank: "#2" },
    { name: "Alpha Jr", role: "Defender", winrate: "57%", kda: "1.00", img: "/placeholder-user.jpg", rank: "#3" }
  ],
  6: [
    { name: "Spark", role: "Vanguard / Capitaine", winrate: "63%", kda: "1.14", img: "/placeholder-user.jpg", rank: "#1" },
    { name: "Storm", role: "Duelist", winrate: "60%", kda: "1.07", img: "/placeholder-user.jpg", rank: "#2" },
    { name: "Thor", role: "Strategist", winrate: "55%", kda: "0.95", img: "/placeholder-user.jpg", rank: "#3" }
  ]
};

export async function GET(request, { params }) {
  const { id } = await params;
  const parsedId = parseInt(id);
  const team = teams.find((t) => t.id === parsedId);

  if (!team) {
    return NextResponse.json({ message: "Team not found" }, { status: 404 });
  }

  // Attach roster
  const teamRoster = rosters[parsedId] || [];
  
  return NextResponse.json({
    ...team,
    roster: teamRoster
  });
}
