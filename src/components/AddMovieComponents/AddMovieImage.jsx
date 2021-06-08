import React, { Component } from 'react';

class AddMovieImage extends Component {
  render() {
    const { image, onImageTextChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ image }
          onChange={ onImageTextChange }
        />
      </label>
    );
  }
}

export default AddMovieImage;
