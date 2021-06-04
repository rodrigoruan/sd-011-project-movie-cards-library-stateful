import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, addMyMovies } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ addMyMovies }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
  addMyMovies: PropTypes.func,
};
Rating.defaultProps = {
  rating: 0,
  addMyMovies: () => {},
};

export default Rating;
