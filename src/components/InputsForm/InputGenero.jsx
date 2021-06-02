import React from 'react';

const InputGenero = () => (
  <label
    htmlFor="genre-input"
    data-testid="genre-input-label"
  >
    Gênero
    <select
      value={ genre }
      data-testid="genre-input"
      onChange={ genre }
    >
      <option
        value="action"
      >
        Ação
      </option>
      <option
        value="comedy"
      >
        Comédia
      </option>
      <option
        value="thriller"
      >
        Suspense
      </option>
    </select>
  </label>
);

export default InputGenero;
