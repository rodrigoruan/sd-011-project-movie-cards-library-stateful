import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SecondPart extends Component {
  render() {
    const { handleChange, storyline, rating } = this.props;
    return (
      <>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            value={ rating }
            name="rating"
            type="number"
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

SecondPart.propTypes = {
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SecondPart;
