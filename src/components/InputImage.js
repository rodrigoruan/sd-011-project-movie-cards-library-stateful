import React, { Component } from 'react';

export default class InputImage extends Component {
  render() {
    return (
      <label htmlFor="inputImage" data-testid="image-input-label">
        Imagem
        <input id="inputImage" data-testid="image-input" type="text" />
      </label>
    );
  }
}
