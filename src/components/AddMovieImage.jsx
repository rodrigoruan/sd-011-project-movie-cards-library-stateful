import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieImage extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="input-image">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="input-image"
          data-testid="image-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
