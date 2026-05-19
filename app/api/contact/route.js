import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Perform minimal mock validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    // Simulate database write / email send
    console.log("Contact form submission received:", { name, email, subject, message });

    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès ! Notre équipe vous contactera sous peu.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Une erreur interne s'est produite." },
      { status: 500 }
    );
  }
}
