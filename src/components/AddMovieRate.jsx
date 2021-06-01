import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieRate extends Component {
  render() {
    const { event, valueProp } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação:
        <input
          data-testid="rating-input"
          value={ valueProp }
          type="number"
          name="rating"
          id="rating"
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieRate.propTypes = {
  valueProp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  event: PropTypes.func.isRequired,
};
