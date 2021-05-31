import React from 'react';
import propTypes from 'prop-types';

class LastLabels extends React.Component {
  render() {
    const { storyline, rating, genre, handleChange } = this.props;
    return (
      <fragment>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ handleChange }
            cols="30"
            rows="10"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            value={ rating }
            max="5"
            min="0"
            type="number"
            onChange={ handleChange }
          />
        </label>
        <label
          data-testid="genre-input-label"
          htmlFor="genre-input"
        >
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            name="genre"
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </fragment>
    );
  }
}

LastLabels.propTypes = {
  storyline: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  genre: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default LastLabels;
