import React from 'react';
import PropTypes from 'prop-types';

export default class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
