import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          name={ Rating }
          type="number"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
