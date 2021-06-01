import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { imagePath, chosenMovie } = this.props;

    return (
      <label
        className="add-movie-labels"
        htmlFor="image-input"
        data-testid="image-input-label"
      >
        Imagem
        <input
          id="image-input"
          name="imagePath"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ chosenMovie }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  imagePath: PropTypes.string.isRequired,
  chosenMovie: PropTypes.func.isRequired,
};

export default ImageInput;
