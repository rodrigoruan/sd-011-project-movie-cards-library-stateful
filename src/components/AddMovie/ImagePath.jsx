import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { image, onChangeHandler } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem:
        <input
          type="text"
          data-testid="image-input"
          value={ image }
          onChange={ onChangeHandler }
          name="imagePath"
        />
      </label>
    );
  }
}

export default ImagePath;

ImagePath.propTypes = {
  image: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
