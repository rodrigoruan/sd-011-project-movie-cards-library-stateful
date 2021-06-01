import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { imagePath, stateModify } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ stateModify }
          data-testid="image-input"
        />
      </label>
    );
  }
}

export default InputImage;

InputImage.propTypes = {
  stateModify: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};
