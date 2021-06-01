import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieImage extends Component {
  render() {
    const { value, event } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-add">
        Imagem
        <input
          data-testid="image-input"
          id="image-add"
          type="text"
          name="imagePath"
          value={ value }
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  value: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
};
