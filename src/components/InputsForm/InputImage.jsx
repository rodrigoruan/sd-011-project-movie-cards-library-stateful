import React from 'react';

const InputImage = () => (
  <label
    htmlFor="image-input"
    data-testid="image-input-label"
  >
    Imagem
    <input
      type="text"
      value={ imagePath }
      data-testid="image-input"
      onChange={ imagePath }
    />
  </label>
);

export default InputImage;
