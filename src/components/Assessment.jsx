import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Assessment extends Component {
  render() {
    const { handlerChange, value } = this.props;
    return (
      <label htmlFor="rating-input-label" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ value }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

Assessment.propTypes = {
  value: PropTypes.number,
  handlerChange: PropTypes.func,
}.isRequired;
