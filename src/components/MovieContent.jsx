import React from 'react';
import PropTypes from 'prop-types';
// I had to make two files to complete Movie's informations cause Lint limit about 50 lines

class MovieContent extends React.Component {
  render() {
    const {
      storyLine,
      rating,
      genre,
      handleChange,
    } = this.props;

    return (
      <fieldset>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyLine"
            id="storyline-input"
            value={ storyLine }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating-input"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-input"
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

MovieContent.propTypes = {
  storyLine: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default MovieContent;
