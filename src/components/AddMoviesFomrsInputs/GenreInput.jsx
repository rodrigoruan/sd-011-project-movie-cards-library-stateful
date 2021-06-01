import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { genre, chosenMovie } = this.props;

    return (
      <label
        className="add-movie-labels"
        htmlFor="genre-input"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          id="genre-input"
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ chosenMovie }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  genre: PropTypes.string.isRequired,
  chosenMovie: PropTypes.func.isRequired,
};

export default GenreInput;
