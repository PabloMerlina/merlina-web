import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

interface LeadData {
  name: string;
  company: string;
  role: string;
  email: string;
  message?: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    if (!data.name || !data.company || !data.role || !data.email) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const { data: insertedData, error } = await supabase
      .from("leads")
      .insert([
        {
          name: data.name,
          company: data.company,
          role: data.role,
          email: data.email,
          message: data.message || null,
          status: "new",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Error al guardar el lead", details: error.message },
        { status: 500 }
      );
    }

    console.log("Lead guardado:", data.email, insertedData);

    return NextResponse.json(
      { success: true, message: "Lead registrado correctamente", data: insertedData },
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
