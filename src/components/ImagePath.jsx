import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="text3">
        Imagem
        <input
          data-testid="image-input"
          id="text3"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default ImagePath;
