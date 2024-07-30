import React, { useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleImageAnalysis = () => {
    // Code to trigger image analysis
  };

  const handleImageGeneration = () => {
    // Code to trigger image generation
  };

  return (
    <div>
      <h1>Visión Informática</h1>
      <p>Inserte la dirección url o copie y pegue la imagen</p>
      <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
      <button onClick={handleImageAnalysis}>Analizar</button>
      <button onClick={handleImageGeneration}>Generar</button>
    </div>
  );
}

export default App;
