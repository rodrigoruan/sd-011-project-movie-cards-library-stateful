import React, { Component } from 'react';

class Imagem extends Component {
  render() {
    const { handlerChange, value } = this.props;
    return (
      <label
        htmlFor="image-input-label"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input-label"
          value={ value }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

export default Imagem;
