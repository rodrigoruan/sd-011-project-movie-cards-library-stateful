import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { imagePath, hadleState } = this.props;

    return (
      <label
        data-testid="image-input-label"
        htmlFor="inputAddMovie"
      >
        Imagem
        <input
          type="text"
          value={ imagePath }
          onChange={ hadleState }
          name="imagePath"
          data-testid="image-input"
          id="inputAddMovie"
        />
      </label>
    );
  }
}

export default InputImage;

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  hadleState: PropTypes.func.isRequired,
};
