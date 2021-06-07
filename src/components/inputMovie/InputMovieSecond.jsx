import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputMovieSecond extends Component {
  render() {
    const { rating, genre, handleNewMovie } = this.props;
    return (
      <div>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            value={ rating }
            name="rating"
            onChange={ handleNewMovie }
            type="number"
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ handleNewMovie }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

InputMovieSecond.propTypes = {
  handleNewMovie: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};
