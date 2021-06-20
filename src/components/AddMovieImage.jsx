import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label
        htmlFor="AddMovie__image"
        data-testid="image-input-label"
      >
        Imagem
        <input
          id="AddMovie__image"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieImage;
