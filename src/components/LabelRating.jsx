import React from 'react';
import PropTypes from 'prop-types';

class LabelRating extends React.Component {
  render() {
    const { rating, handleStates } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
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
  rating: PropTypes.func,
  handleStates: PropTypes.func,
};
LabelRating.defaultProps = {
  rating: () => {},
  handleStates: () => {},
};
