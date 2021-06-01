import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieImagePath extends Component {
  render() {
    const { value, handleInputs } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ value }
          onChange={ handleInputs }
          data-testid="image-input"
        />
      </label>
    );
  }
}

AddMovieImagePath.propTypes = {
  handleInputs: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddMovieImagePath;
