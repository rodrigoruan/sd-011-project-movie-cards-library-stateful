import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { func, addMovie } = this.props;
    const { state: { rating, genre, storyline } } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          &quot;Avaliação&quot;
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ func }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          &quot;Gênero&quot;
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ func }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <label data-testid="storyline-input-label" htmlFor="storyline-input">
            &quot;Sinopse&quot;
            <textarea
              name="storyline"
              data-testid="storyline-input"
              value={ storyline }
              onChange={ func }
            />
          </label>
          <button
            data-testid="send-button"
            onClick={ addMovie }
            type="button"
          >
            Adicionar filme
          </button>
        </label>
      </div>
    );
  }
}

Form.propTypes = {
  func: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
  state: PropTypes.shape({
    storyline: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
  }).isRequired,
};
