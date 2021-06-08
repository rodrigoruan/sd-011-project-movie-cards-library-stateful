import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="imgInp" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="imgInp"
          data-testid="image-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Image;
