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
            data-testid="rating-input"
            name="rating"
            type="text"
            value={ rating }
            onChange={ handleChange }
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
  rating: 'undefined',

};

export default Rating;
