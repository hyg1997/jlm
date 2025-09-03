# Arcring Perú - Website de Cámaras de Seguridad

Una aplicación web moderna construida con Next.js 14, TypeScript y TailwindCSS que replica el contenido de la página de cámaras de seguridad de Arcring Perú.

## 🚀 Tecnologías

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **TailwindCSS** para estilos
- **Shadcn/ui** para componentes UI
- **Lucide React** para iconos

## 📁 Estructura del Proyecto

```
├── app/                          # App Router de Next.js
│   ├── page.tsx                  # Página de inicio
│   ├── camaras-de-seguridad/     # Página principal de cámaras
│   ├── servicios/                # Página de servicios
│   ├── faq/                      # Preguntas frecuentes
│   ├── contacto/                 # Formulario de contacto
│   └── api/contact/              # API route para formulario
├── components/                   # Componentes reutilizables
│   ├── Header.tsx               # Navegación principal
│   ├── Footer.tsx               # Pie de página
│   ├── Hero.tsx                 # Sección hero
│   ├── CameraCard.tsx           # Tarjetas de cámaras
│   ├── FaqAccordion.tsx         # Acordeón para FAQ
│   └── ContactForm.tsx          # Formulario de contacto
└── content/
    └── camaras.json             # Contenido dinámico del sitio
```

## 🛠️ Instalación y Desarrollo

### 1. Clonar e instalar dependencias

```bash
git clone <tu-repositorio>
cd arcring-peru
npm install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### 3. Construir para producción

```bash
npm run build
```

## 🚀 Despliegue en Vercel

### Método 1: Desde GitHub (Recomendado)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Haz clic en "New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente la configuración de Next.js
6. Haz clic en "Deploy"

### Método 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deployar
vercel

# Para producción
vercel --prod
```

### Variables de Entorno (si son necesarias)

Si agregas integraciones como EmailJS o bases de datos, crea un archivo `.env.local`:

```env
# Ejemplo para EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📝 Gestión de Contenido

### Editar contenido del sitio

Todo el contenido se gestiona desde el archivo `content/camaras.json`:

- **Meta tags**: SEO y metadata
- **Hero section**: Títulos y CTAs
- **Beneficios**: Lista de ventajas
- **Tipos de cámaras**: Características de cada tipo
- **Servicios**: Descripción de servicios ofrecidos
- **FAQ**: Preguntas y respuestas
- **Cobertura**: Ciudades donde hay servicio
- **Contacto**: Información de la empresa

### Ejemplo de edición

```json
{
  "hero": {
    "title": "Nuevo Título Principal",
    "subtitle": "Nueva descripción",
    "cta": "Nuevo CTA"
  }
}
```

Después de cualquier cambio, el sitio se actualizará automáticamente.

## 📧 Configuración de Emails

### Opción 1: EmailJS (Recomendado)

1. Crea una cuenta en [EmailJS](https://emailjs.com)
2. Configura un servicio de email (Gmail, Outlook, etc.)
3. Crea un template de email
4. Agrega las variables de entorno en Vercel
5. Modifica `ContactForm.tsx` para usar EmailJS

### Opción 2: Zapier

1. Crea una cuenta en [Zapier](https://zapier.com)
2. Configura un webhook que reciba los datos del formulario
3. Conecta con tu servicio de email preferido
4. Modifica el API route en `app/api/contact/route.ts`

### Opción 3: Servicio de Email Propio

Puedes integrar servicios como:
- SendGrid
- Mailgun
- Resend
- NodeMailer

## 📱 Características del Sitio

- ✅ Diseño responsive (mobile-first)
- ✅ SEO optimizado
- ✅ Navegación accesible
- ✅ Formulario de contacto funcional
- ✅ Integración con WhatsApp
- ✅ Enlaces a redes sociales
- ✅ Contenido gestionado por JSON
- ✅ Optimizado para Vercel

## 🎨 Personalización de Diseño

### Colores

Los colores principales están definidos en `tailwind.config.ts`:

- **Azul primario**: `blue-700` para navegación y CTAs principales
- **Naranja**: `orange-600` para CTAs secundarios
- **Verde**: `green-600` para checks y confirmaciones

### Fuentes

Usa la fuente Inter que está configurada en `layout.tsx`.

### Imágenes

Las imágenes de stock vienen de Pexels. Para cambiar:

1. Busca nuevas imágenes en [Pexels](https://pexels.com)
2. Copia la URL de la imagen
3. Reemplaza en los componentes correspondientes

## 📞 Soporte

Para soporte técnico o modificaciones:

- 📧 Email: [tu-email@desarrollo.com]
- 📱 WhatsApp: [tu-numero]

## 📄 Licencia

Este proyecto es propiedad de Arcring Perú. Todos los derechos reservados.