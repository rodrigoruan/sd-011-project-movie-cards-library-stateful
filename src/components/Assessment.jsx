import React, { Component } from 'react';

export default class Assessment extends Component {
  render() {
    return (
      <label htmlFor="rating-input-label" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          onChange={ this.handlerChange }
        />
      </label>
    );
  }
}
