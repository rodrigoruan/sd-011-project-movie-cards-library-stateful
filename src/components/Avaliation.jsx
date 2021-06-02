import React from 'react';
import PropTypes from 'prop-types';

class Avaliation extends React.Component {
  render() {
    const { inputRead, value } = this.props;
    return (
      <label htmlFor="rating-id" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-id"
          name="rating"
          type="number"
          placeholder="Digite uma nota de 0 a 5"
          data-testid="rating-input"
          value={ value }
          onChange={ inputRead }
        />
      </label>
    );
  }
}

Avaliation.propTypes = {
  value: PropTypes.number,
  inputRead: PropTypes.func,
}.isRequired;

export default Avaliation;
