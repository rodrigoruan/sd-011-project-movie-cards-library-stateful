import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCardImage extends Component {
  render() {
    const { handleEvents } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          onChange={ handleEvents }
        />
      </label>
    );
  }
}

MovieCardImage.propTypes = {
  handleEvents: PropTypes.func.isRequired,
};
