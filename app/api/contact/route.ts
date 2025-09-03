import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Log the contact form submission
    console.log('=== NUEVA CONSULTA DE CONTACTO ===');
    console.log('Fecha:', new Date().toISOString());
    console.log('Nombre:', formData.name);
    console.log('Email:', formData.email);
    console.log('Teléfono:', formData.phone);
    console.log('Tipo de propiedad:', formData.propertyType);
    console.log('Mensaje:', formData.message);
    console.log('================================');

    // Here you could integrate with EmailJS, Zapier, or any email service
    // For now, we just log and return success
    
    return NextResponse.json(
      { 
        message: 'Consulta recibida exitosamente',
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        message: 'Error al procesar la consulta',
        success: false 
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}