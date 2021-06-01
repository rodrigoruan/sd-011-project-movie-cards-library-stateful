import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
