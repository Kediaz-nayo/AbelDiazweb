// Este es el código que se ejecuta en Netlify
export const handler = async (event) => {
  // Obtenemos la URL de nuestro Google Apps Script desde las variables de entorno de Netlify
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_APP_SCRIPT_URL;

  // Obtenemos los datos del formulario que envió el navegador
  const formData = JSON.parse(event.body);

  try {
    // Usamos 'fetch' para enviar los datos a nuestro script de Google
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    // Si Google responde con éxito, nosotros también lo hacemos
    if (data.result === 'success') {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "¡Mensaje enviado con éxito!" }),
      };
    } else {
      // Si Google responde con un error, lo registramos
      throw new Error('Google Script reported an error.');
    }

  } catch (error) {
    // Si hay cualquier otro error, lo devolvemos
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Hubo un error al enviar el formulario." }),
    };
  }
};
