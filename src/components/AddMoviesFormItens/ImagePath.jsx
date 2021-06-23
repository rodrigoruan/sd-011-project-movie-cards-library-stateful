import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Req.10
class ImagePath extends Component {
  render() {
    const { imagePath, newImage } = this.props;
    return (
      <label htmlFor="image-input-label" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ newImage }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string,
  newImage: PropTypes.func,
}.isRequired;

export default ImagePath;
