import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { rating, handler } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          onChange={ handler }
          value={ rating }
        />
      </label>
    );
  }
}

export default AddMovieRating;

AddMovieRating.propTypes = {
  rating: PropTypes.number,
  handler: PropTypes.func.isRequired,
};

AddMovieRating.defaultProps = {
  rating: 0,
};
