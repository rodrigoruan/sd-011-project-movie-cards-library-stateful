import React from 'react';
import PropTypes from 'prop-types';

class Avaliation extends React.Component {
  render() {
    const { handler, rating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          name="rating"
          onChange={ handler }
        />
      </label>
    );
  }
}

export default Avaliation;

Avaliation.propTypes = {
  handler: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};
