import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelImage extends Component {
  render() {
    const { imagePath, handleStates } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleStates }
        />
      </label>
    );
  }
}

export default LabelImage;

LabelImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleStates: PropTypes.func,
};

LabelImage.defaultProps = {
  handleStates: 'Insert handleStates Function',
};
