// I had to make two files to complete Movie's informations cause Lint limit about 50 lines
import React from 'react';
import PropTypes from 'prop-types';

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
        <label htmlFor="storyline-input" data-testid="storyline">
          Storyline
          <textarea
            name="storyLine"
            id="storyline-input"
            value={ storyLine }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Rating
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
          Gender
          <select
            name="genre"
            id="genre-input"
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option value="action" data-testid="genre-option">Action</option>
            <option value="comedy" data-testid="genre-option">Comedy</option>
            <option value="thriller" data-testid="genre-option">Thriller</option>
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
