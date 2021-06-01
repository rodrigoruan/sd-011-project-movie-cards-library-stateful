import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, handleInput } = this.props;
    return (
      <div>
        <label
          className="add-label"
          data-testid="rating-input-label"
          htmlFor="rating-input"
        >
          Avaliação
          <input
            type="number"
            className="add-input"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleInput }
          />
        </label>
      </div>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.string,
  handleInput: PropTypes.func,
}.isRequired;

export default RatingInput;
