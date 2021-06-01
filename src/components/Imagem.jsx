import React, { Component } from 'react';

export default class Imagem extends Component {
  render() {
    const { initialValue, imagePath } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ initialValue }
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  initialValue: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};
