import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Avaliação extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <section>
        <label htmlFor="rating-input-label" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ value }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

Avaliação.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;
