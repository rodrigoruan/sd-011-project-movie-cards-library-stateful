import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Imagem extends Component {
  render() {
    const { handleInitialValue, imagePath } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          onChange={ handleInitialValue }
          value={ imagePath }
          data-testid="image-input"
          id="image-input"
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  handleInitialValue: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};
