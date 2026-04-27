import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  company: string;
  role: string;
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Validar datos
    if (!data.name || !data.company || !data.role || !data.email) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // TODO: Guardar en Supabase o enviar email
    console.log("Nuevo lead:", data);

    // Aquí puedes:
    // 1. Guardar en Supabase
    // 2. Enviar email a tu dirección
    // 3. Integrar con tu CRM

    return NextResponse.json(
      { success: true, message: "Lead registrado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error procesando lead:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
