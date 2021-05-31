import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieImg extends Component {
  render() {
    const { event, valueProp } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem:
        <input
          id="image-input"
          name="imagePath"
          value={ valueProp }
          data-testid="image-input"
          type="text"
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieImg.propTypes = {
  valueProp: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
