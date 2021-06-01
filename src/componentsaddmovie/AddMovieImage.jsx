import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieImage extends Component {
  render() {
    const { event, valueR } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem:
        <input
          id="image-input"
          name="imagePath"
          value={ valueR }
          data-testid="image-input"
          type="text"
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  valueR: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
