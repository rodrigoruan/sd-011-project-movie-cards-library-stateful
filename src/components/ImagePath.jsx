import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImagePath extends Component {
  render() {
    const { imagePath, handleAddMovie } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="text">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ handleAddMovie }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleAddMovie: PropTypes.func.isRequired,
}.isRequired;
