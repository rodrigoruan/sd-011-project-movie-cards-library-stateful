import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          data-testid="image-input"
          value={ value }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

export default Imagem;

Imagem.propTypes = {
  value: PropTypes.string,
  handlerChange: PropTypes.func,
}.isRequired;
