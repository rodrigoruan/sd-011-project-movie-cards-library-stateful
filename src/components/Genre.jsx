import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;

    return (
      <label data-testid="genre-input-label" htmlFor="addMovieGenre">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          onChange={ handleChange }
          id="addMovieGenre"
          name="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Genre;
