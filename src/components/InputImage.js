import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, addMyMovies } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ addMyMovies }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string,
  addMyMovies: PropTypes.func,
};
Image.defaultProps = {
  imagePath: '',
  addMyMovies: () => {},
};

export default Image;
