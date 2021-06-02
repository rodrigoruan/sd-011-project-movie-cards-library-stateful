import React from 'react';

const InputSinopse = () => (
  <label
    htmlFor="storyline-input"
    data-testid="storyline-input-label"
  >
    Sinopse
    <input
      type="textarea"
      value={ storyline }
      data-testid="storyline-input"
      onChange={ storyline }
    />
  </label>
);

export default InputSinopse;
