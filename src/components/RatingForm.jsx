import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingForm extends Component {
  // prettier-ignore
  render() {
    const { rating, onChangeHandler } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          onChange={ onChangeHandler }
          value={ rating }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RatingForm.propTypes = {
  rating: PropTypes.number.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
