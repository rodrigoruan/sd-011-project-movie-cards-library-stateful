import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { handler, value } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ value }
          name="rating"
          onChange={ handler }
        />
      </label>
    );
  }
}

export default Rating;

Rating.propTypes = {
  handler: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
