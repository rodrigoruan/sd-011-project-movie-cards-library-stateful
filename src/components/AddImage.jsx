import React from 'react';
import PropTypes from 'prop-types';

class AddImage extends React.Component {
  render() {
    const { handleChange, ImagePath } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="image-input"
          id="image"
          value={ ImagePath }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddImage.propTypes = {
  ImagePath: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddImage;
