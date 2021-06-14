import React, { Component } from 'react';
import propTypes from 'prop-types';

class AddMovieImage extends Component {
  render() {
    const { imagePath, changer } = this.props;
    return (
      <label htmlFor="image-input-label" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          onChange={ changer }
          value={ imagePath }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  imagePath: propTypes.text,
  changer: propTypes.func,
}.isRequired;

AddMovieImage.defaultProps = {
  imagePath: '',
};

export default AddMovieImage;
