import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          id="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Image;
