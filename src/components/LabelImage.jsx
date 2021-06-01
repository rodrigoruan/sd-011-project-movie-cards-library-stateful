import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelImage extends Component {
  render() {
    const { value, functionChange } = this.props;
    return (
      <label htmlFor="image-input-label" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ functionChange }
        />
      </label>
    );
  }
}

LabelImage.propTypes = {
  value: PropTypes.string.isRequired,
  functionChange: PropTypes.func.isRequired,
};

export default LabelImage;
