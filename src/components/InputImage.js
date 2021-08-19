import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { imagePath, handleValue } = this.props;

    return (
      <label htmlFor="ex10" data-testid="image-input-label">
        Imagem
        <input
          id="ex10"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          name="imagePath"
          onChange={ handleValue }
          className="add-movie-image"
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string,
  handleValue: PropTypes.func,
};

InputImage.defaultProps = {
  imagePath: '',
  handleValue: null,
};

export default InputImage;
