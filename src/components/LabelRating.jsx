import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          id="rating"
          data-testid="rating-input"
          onChange={ rating }
        />
      </label>
    );
  }
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.func,
};
Rating.defaultProps = {
  rating: () => {},
};
