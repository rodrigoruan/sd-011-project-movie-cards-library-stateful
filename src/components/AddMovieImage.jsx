import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem:
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieImage;
