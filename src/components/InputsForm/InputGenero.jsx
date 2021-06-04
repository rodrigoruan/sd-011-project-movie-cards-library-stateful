import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGenero extends Component {
  render() {
    const {
      value,
      handlerChange,
    } = this.props;
    return (
      <label
        htmlFor="genre-input"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ handlerChange }
        >
          <option
            value="action"
            data-testid="genre-option"
          >
            Ação
          </option>
          <option
            value="comedy"
            data-testid="genre-option"
          >
            Comédia
          </option>
          <option
            value="thriller"
            data-testid="genre-option"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

InputGenero.propTypes = {
  value: PropTypes.number.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default InputGenero;
