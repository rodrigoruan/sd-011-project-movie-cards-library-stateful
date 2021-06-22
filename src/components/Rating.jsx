import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            onChange={ handleChange }
            data-testid="rating-input"
            name="rating"
            type="number"
            value={ rating }
          />
        </label>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

Rating.defaultProps = {
  rating: 0,

};

export default Rating;
