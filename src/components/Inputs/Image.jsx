import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { imagePath, handleFunction } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          id="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ handleFunction }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string,
  handleFunction: PropTypes.func,
}.isRequired;

export default Image;
