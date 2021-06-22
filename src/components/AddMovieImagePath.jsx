import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieImagePath extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="add-movie-image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          id="add-movie-image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
