import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieRating extends Component {
  render() {
    const { value, event } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-add">
        Avaliação
        <input
          data-testid="rating-input"
          id="rating-add"
          type="number"
          name="rating"
          value={ value }
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  value: PropTypes.number.isRequired,
  event: PropTypes.string.isRequired,
};
