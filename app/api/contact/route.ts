import { NextRequest, NextResponse } from "next/server";

export async function POST(_: NextRequest) {
  try {
    return NextResponse.json(
      {
        message: "Consulta recibida exitosamente",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error al procesar la consulta",
        success: false,
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
