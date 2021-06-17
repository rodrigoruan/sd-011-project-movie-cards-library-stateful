import React, { Component } from 'react';
import { string, func } from 'prop-types';

class ImagePath extends Component {
  render() {
    const { imagePath, handleInputChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleInputChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: string,
  handleInputChange: func,
}.isRequired;

export default ImagePath;
