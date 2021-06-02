import React from 'react';

const InputAvaliacao = () => (
  <label
    htmlFor="rating-input"
    data-testid="rating-input-label"
  >
    Avaliação
    <input
      type="number"
      value={ rating }
      data-testid="rating-input"
      onChange={ rating }
    />
  </label>
);

export default InputAvaliacao;
