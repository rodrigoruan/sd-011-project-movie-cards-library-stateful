import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};
Rating.defaultProps = {
  rating: 0,
};

export default Rating;
