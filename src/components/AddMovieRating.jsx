import React, { Component } from 'react';

class AddMovieRating extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
    };

    this.createRating = this.createRating.bind(this);
  }

  createRating(event) {
    this.setState({ rating: event.target.value });
  }

  render() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ rating }
          onChange={ this.createRating }
          data-testid="rating-input"
          id="rating"
        />
      </label>
    );
  }
}

export default AddMovieRating;
