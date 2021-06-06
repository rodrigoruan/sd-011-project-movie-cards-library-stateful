import React, { Component } from 'react';

export default class Imagem extends Component {
  render() {
    return (
      <label htmlFor="image-input-label" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          onChange={ this.handlerChange }
        />
      </label>
    );
  }
}
