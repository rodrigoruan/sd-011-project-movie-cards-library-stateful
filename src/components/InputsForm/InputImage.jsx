import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImage extends Component {
  render() {
    const {
      value,
      handlerChange,
    } = this.props;
    return (
      <label
        htmlFor="image-input"
        data-testid="image-input-label"
      >
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  value: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default InputImage;
