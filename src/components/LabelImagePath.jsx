import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelImagePath extends Component {
  render() {
    const { value, change } = this.props;
    return (
      <label htmlFor="imageInput" data-testid="image-input-label">
        Imagem:
        <input
          name="imagePath"
          type="text"
          value={ value }
          onChange={ change }
          data-testid="image-input"
        />
      </label>
    );
  }
}

LabelImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default LabelImagePath;
