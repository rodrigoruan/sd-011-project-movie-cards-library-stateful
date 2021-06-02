import React from 'react';

const InputSubtitle = () => (
  <label
    htmlFor="subtitle-input"
    data-testid="subtitle-input-label"
  >
    Subtítulo
    <input
      type="text"
      value="subtitle"
      data-testid="subtitle-input"
      onChange={ subtitle }
    />
  </label>
);

export default InputSubtitle;
