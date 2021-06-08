import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelRating extends Component {
  render() {
    const { rating, handleStates } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleStates }
        />
      </label>
    );
  }
}

export default LabelRating;

LabelRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleStates: PropTypes.func,
};

LabelRating.defaultProps = {
  handleStates: 'Insert handleStates Function',
};
