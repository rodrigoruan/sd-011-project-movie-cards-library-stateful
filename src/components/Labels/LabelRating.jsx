import React from 'react';
import PropTypes from 'prop-types';

class LabelRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
          className="input-box"
        />
      </label>
    );
  }
}

LabelRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LabelRating;
