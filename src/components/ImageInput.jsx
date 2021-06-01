import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { imagePath, handleInput } = this.props;
    return (
      <div>
        <label
          className="add-label"
          data-testid="image-input-label"
          htmlFor="image-input"
        >
          Imagem
          <input
            type="text"
            className="add-input"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleInput }
          />
        </label>
      </div>
    );
  }
}

ImageInput.propTypes = {
  imagePath: PropTypes.string,
  handleInput: PropTypes.func,
}.isRequired;

export default ImageInput;
