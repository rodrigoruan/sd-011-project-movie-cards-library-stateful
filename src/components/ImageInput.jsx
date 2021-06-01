import React from 'react';
import PropTypes from 'prop-types';

export default class ImageInput extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          id="image-input"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};
