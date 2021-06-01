import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { imagePath, handleState } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ handleState }
        />
      </label>
    );
  }
}

export default ImagePath;

ImagePath.propTypes = {
  imagePath: PropTypes.string,
  handleState: PropTypes.func,
};

ImagePath.defaultProps = {
  imagePath: '',
  handleState: () => {},
};
