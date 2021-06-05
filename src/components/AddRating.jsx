import React from 'react';
import PropTypes from 'prop-types';

class AddRating extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
    };
  }

  render() {
    const { handleChange } = this.props;
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating-input"
          id="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default AddRating;
