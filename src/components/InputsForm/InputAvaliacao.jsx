import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputAvaliacao extends Component {
  render() {
    const {
      value,
      handlerChange,
    } = this.props;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          name="rating"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

InputAvaliacao.propTypes = {
  value: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default InputAvaliacao;
