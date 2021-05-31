import React, { Component } from 'react';

export default class AddMovieRating extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input"
          data-testid="rating-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
