import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ value }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

ImagePath.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default ImagePath;
