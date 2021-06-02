import React from 'react';
import PropTypes from 'prop-types';

class Avaliation extends React.Component {
  render() {
    const { handlerChange } = this.props;
    const { rating } = this.props;
    return (
      <label htmlFor="text5" data-testid="rating-input-label">
        Avaliação
        <input
          id="text5"
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

Avaliation.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};

export default Avaliation;
