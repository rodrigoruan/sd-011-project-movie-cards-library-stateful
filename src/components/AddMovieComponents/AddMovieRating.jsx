import React, { Component } from 'react';

class AddMovieRating extends Component {
  render() {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
        />
      </label>
    );
  }
}

export default AddMovieRating;
