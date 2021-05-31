import React from 'react';

class NumberRating extends React.Component {
  render() {
    const { changeState, rating } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ changeState }
        />
      </label>
    );
  }
}

NumberRating.propTypes = {
  changeState: PropTypes.isRequired,
  rating: PropTypes.isRequired,
};

export default NumberRating;
