import React, { Component } from 'react';

class addMovieImage extends Component {
  render() {
    const { imagePath, handleMovie } = this.props;
    return (
      <label htmlFor="imageId" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          id="imageId"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ handleMovie }
        />
      </label>
    );
  }
}

export default addMovieImage;