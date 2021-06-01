import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        <input
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleChange }
        />
        Imagem
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Image;
