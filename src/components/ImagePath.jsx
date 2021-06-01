import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="addMovieImageInput">
        Imagem
        <input
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleChange }
          id="addMovieImageInput"
          name="imagePath"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePath;
