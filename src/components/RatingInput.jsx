import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { rating, handleState } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleState }
        />
      </label>
    );
  }
}

export default RatingInput;

RatingInput.propTypes = {
  rating: PropTypes.string,
  handleState: PropTypes.func,
};

RatingInput.defaultProps = {
  rating: '',
  handleState: () => {},
};
