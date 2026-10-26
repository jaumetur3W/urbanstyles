import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Strict Server-Side Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "El nom és obligatori i ha de tenir almenys 2 caràcters." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "L'adreça de correu electrònic no és vàlida." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "L'assumpte és obligatori." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "El missatge ha de contenir una descripció suficient." },
        { status: 400 }
      );
    }

    // In a production setup, dispatch to transactional email provider (Resend, SendGrid, Postmark)
    console.log(`[Contact Form] Nova petició rebuda de: ${name} <${email}>: "${subject}"`);

    return NextResponse.json(
      { success: true, message: "Consulta rebuda correctament." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error a /api/contact:", error);
    return NextResponse.json(
      { error: "Error intern del servidor al processar el missatge." },
      { status: 500 }
    );
  }
}

