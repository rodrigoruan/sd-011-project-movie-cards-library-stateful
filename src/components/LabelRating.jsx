import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelRating extends Component {
  render() {
    const { value, change } = this.props;
    return (
      <label htmlFor="ratingInput" data-testid="rating-input-label">
        Avaliação:
        <input
          name="rating"
          type="number"
          value={ Number(value) }
          data-testid="rating-input"
          onChange={ change }
        />
      </label>
    );
  }
}

LabelRating.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default LabelRating;
