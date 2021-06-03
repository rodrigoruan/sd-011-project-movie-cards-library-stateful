// I had to make two files to complete Movie's informations cause Lint limit about 50 lines
import React from 'react';
import PropTypes from 'prop-types';

class MovieContent extends React.Component {
  // render
  render() {
    // declaring initial info
    const {
      storyLine,
      rating,
      genre,
      handleChange,
    } = this.props;
    return (
      // forms with Movie's data
      <fieldset id="secondfield">
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

// propTypes
MovieContent.propTypes = {
  storyLine: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

// exports
export default MovieContent;
