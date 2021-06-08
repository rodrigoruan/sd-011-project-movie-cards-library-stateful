import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends Component {
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

export default AddMovieImage;

AddMovieImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleMovie: PropTypes.func.isRequired,
};
