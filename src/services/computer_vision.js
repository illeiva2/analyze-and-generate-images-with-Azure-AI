// azure-image-analysis.js

import axios from 'axios';

// URL base de la API de Azure Vision
const azureVisionApiUrl = 'https://eastus.api.cognitive.microsoft.com/vision/v4.0/analyze';

// Llave de acceso a la API (debes obtenerla desde Azure Portal)
const apiKey = 'bdfb91fcb4364ccfb86ea4e2f18e887b';

// Función para analizar una imagen
async function analyzeImage(imageUrl) {
  try {
    const response = await axios.post(
      `${azureVisionApiUrl}?visualFeatures=Description,Tags`, // Puedes personalizar las características visuales aquí
      { url: imageUrl },
      {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': apiKey,
        },
      }
    );

    return response.data; // Devuelve la respuesta JSON de la API
  } catch (error) {
    console.error('Error al analizar la imagen:', error.message);
    return null;
  }
}

export default analyzeImage;
