import React from 'react';
import PropTypes from 'prop-types';

class NumberRating extends React.Component {
  render() {
    const { changeState, rating } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ changeState }
        />
      </label>
    );
  }
}

NumberRating.propTypes = {
  changeState: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default NumberRating;
