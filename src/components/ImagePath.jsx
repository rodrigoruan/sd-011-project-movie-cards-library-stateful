import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          className="addMovie-inputs"
          type="text"
          name="imagePath"
          imagePath={ imagePath }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default ImagePath;

ImagePath.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
};

ImagePath.defaultProps = {
  imagePath: '',
  handleChange: () => {},
};
