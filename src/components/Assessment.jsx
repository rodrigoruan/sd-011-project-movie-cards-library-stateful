import React, { Component } from 'react';

export default class Assessment extends Component {
  render() {
    const { handlerChange, value } = this.props;
    return (
      <label htmlFor="rating-input-label" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input-label"
          value={ value }
          onChange={ handlerChange }
        />
      </label>
    );
  }
}
