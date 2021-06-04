import React from 'react';
import PropTypes from 'prop-types';

class LableImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="input-image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="image"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default LableImage;

LableImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
