import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const {
      value,
      handlerChange,
    } = this.props;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  value: PropTypes.number.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default Image;
