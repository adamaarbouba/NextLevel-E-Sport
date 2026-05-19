import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Adresse email et mot de passe requis." },
        { status: 400 }
      );
    }

    const username = email.split("@")[0];
    const user = {
      email,
      username: username.charAt(0).toUpperCase() + username.slice(1),
      firstName: username.charAt(0).toUpperCase() + username.slice(1),
      lastName: "Player",
      role: "Duelist",
      bio: "Joueur passionné de NextLevel E-Sport. En route vers le sommet !",
    };

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: "Une erreur est survenue lors de la connexion." },
      { status: 500 }
    );
  }
}
