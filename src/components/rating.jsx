import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { valorRating, change } = this.props;
    return (
      <label htmlFor="inputRating" data-testid="rating-input-label">
        Avaliação
        <input
          name="Rating"
          type="number"
          id="inputRating"
          value={ valorRating }
          data-testid="rating-input"
          onChange={ change }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  valorRating: PropTypes.number,
  change: PropTypes.func,
};

Rating.defaultProps = {
  valorRating: 0,
  change: () => {},
};

export default Rating;
