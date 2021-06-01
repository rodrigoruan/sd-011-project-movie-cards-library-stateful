import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="imagem" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          value={ value }
          id="imagem"
          type="text"
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ImagePath;
