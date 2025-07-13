// src/pages/api/chat.ts
import type { APIRoute } from 'astro';
import Groq from 'groq-sdk';

const groqApiKey = import.meta.env.GROQ_API_KEY;

// Verificación inicial al cargar la función
if (!groqApiKey) {
  console.error("CRÍTICO: La variable de entorno GROQ_API_KEY no está configurada.");
}

const groq = new Groq({ apiKey: groqApiKey });

export const POST: APIRoute = async ({ request }) => {
  // Verificación de la API Key en cada petición (buena práctica)
  if (!groqApiKey) {
    return new Response(JSON.stringify({ error: "Configuración del servidor incompleta: falta la clave de API." }), { status: 500 });
  }

  try {
    const { userMessage, context } = await request.json();

    if (!userMessage || !context) {
      return new Response(JSON.stringify({ error: 'Petición inválida: Falta el mensaje o el contexto.' }), { status: 400 });
    }

    // --- BLOQUE DE LLAMADA A GROQ MEJORADO ---
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: context },
        { role: 'user', content: userMessage },
      ],
      model: 'llama-3.1-8b-instant',
    });

    const reply = chatCompletion.choices[0]?.message?.content;

    if (!reply) {
      // Si Groq responde pero no hay contenido, lo manejamos como un error.
      throw new Error("La respuesta de la API de Groq estaba vacía.");
    }

    return new Response(JSON.stringify({ reply }), { status: 200 });

  } catch (error) {
    console.error("Error detallado en la función del servidor:", error);

    // Verificamos si el error es de Groq por una API key inválida
    if (error instanceof Groq.APIError) {
        if (error.status === 401) {
            return new Response(JSON.stringify({ error: "Error de autenticación con la API de Groq. Verifica la clave." }), { status: 500 });
        }
    }

    // Devolvemos un error más genérico si no es un error de API conocido
    const errorMessage = error instanceof Error ? error.message : "Error desconocido en el servidor";
    return new Response(JSON.stringify({ error: `Error interno: ${errorMessage}` }), { status: 500 });
  }
};