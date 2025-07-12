import type { APIRoute } from "astro";

// La URL real de la API de Groq
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Obtenemos la clave secreta desde las variables de entorno del servidor
const GROQ_API_KEY = import.meta.env.GROQ_API_KEY;

export const POST: APIRoute = async ({ request }) => {
  // Leemos los datos que nos envía el chatbot del navegador (el prompt y el contexto)
  const { userMessage, context } = await request.json();

  if (!userMessage || !context) {
    return new Response("Faltan datos en la solicitud", { status: 400 });
  }

  if (!GROQ_API_KEY) {
    return new Response("La clave de API del servidor no está configurada", { status: 500 });
  }

  const messages = [
    { role: "system", content: context },
    { role: "user", content: userMessage }
  ];

  try {
    // Hacemos la llamada a Groq DESDE EL SERVIDOR
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`, // Usamos la clave secreta aquí
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
        top_p: 1,
        stream: false
      })
    });

    if (!response.ok) {
      console.error("Error desde la API de Groq:", await response.text());
      return new Response("Error al comunicarse con la API de IA", { status: response.status });
    }

    const data = await response.json();
    const botResponse = data.choices[0].message.content;

    // Enviamos solo la respuesta del bot de vuelta al navegador
    return new Response(JSON.stringify({ reply: botResponse }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Error en la ruta de API /api/chat:", error);
    return new Response("Error interno del servidor", { status: 500 });
  }
};