import React from 'react';
import PropTypes from 'prop-types';

class AddImage extends React.Component {
  render() {
    const { image, handleChange } = this.props;
    return (
      <label
        htmlFor="image"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ image }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddImage.propTypes = {
  image: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddImage;
