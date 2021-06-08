import React, { Component } from 'react';

class addMovieRating extends Component {
  render() {
    const { rating, handleMovie } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleMovie }
        />
      </label>
    );
  }
}

export default addMovieRating;
