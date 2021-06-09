import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="ratInp" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="ratInp"
          value={ value }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Avaliacao;
