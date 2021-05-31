import React from 'react';
import PropTypes from 'prop-types';

class MovieInfo2 extends React.Component {
  render() {
    const {
      storyLine,
      rating,
      genre,
      handleChange,
    } = this.props;

    return (
      <fieldset>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            id="storyline-input"
            name="storyLine"
            value={ storyLine }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
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
        <label data-testid="genre-input-label" htmlFor="genre-input">
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

MovieInfo2.propTypes = {
  storyLine: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MovieInfo2;
