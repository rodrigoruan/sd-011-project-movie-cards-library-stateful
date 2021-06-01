import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const {
      imagePath,
      handleChange,
    } = this.props;

    return (
      <div>
        <label data-testid="image-input-label" htmlFor="imagePath">
          <span>Imagem</span>

          <input
            id="imagePath"
            type="text"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
          />

        </label>
      </div>
    );
  }
}

ImageInput.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImageInput;
