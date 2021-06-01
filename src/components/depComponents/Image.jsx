import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="input-url" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          id="input-url"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
