// src/pages/api/chat.ts
import type { APIRoute } from 'astro';
import Groq from 'groq-sdk';

// Obtenemos la clave de API de las variables de entorno de Netlify/Vercel/etc.
const groqApiKey = import.meta.env.GROQ_API_KEY;

if (!groqApiKey) {
  throw new Error("La variable de entorno GROQ_API_KEY no está configurada.");
}

const groq = new Groq({ apiKey: groqApiKey });

export const POST: APIRoute = async ({ request }) => {
  try {
    const { userMessage, context } = await request.json();

    if (!userMessage || !context) {
      return new Response(JSON.stringify({ error: 'Falta el mensaje o el contexto.' }), { status: 400 });
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: context,
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
      model: 'llama-3.1-8b-instant',
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
    });

    const reply = chatCompletion.choices[0]?.message?.content || 'No pude procesar esa respuesta.';

    return new Response(JSON.stringify({ reply }), { status: 200 });

  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "Error desconocido en el servidor";
    return new Response(JSON.stringify({ error: `Error interno del servidor: ${errorMessage}` }), { status: 500 });
  }
};