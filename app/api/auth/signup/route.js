import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { firstName, lastName, email, password } = await request.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { message: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    const user = {
      email,
      username: `${firstName} ${lastName}`,
      firstName,
      lastName,
      role: "Duelist",
      bio: "Joueur passionné de NextLevel E-Sport. En route vers le sommet !",
    };

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: "Une erreur est survenue lors de l'inscription." },
      { status: 500 }
    );
  }
}
