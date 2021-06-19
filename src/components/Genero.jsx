import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Genero extends Component {
  render() {
    const { valueGenre, handleChange } = this.props;
    return (
      <label htmlFor="genre-input-label" data-testid="genre-input-label">
        Gênero
        <select
          aria-label="choose-genre"
          data-testid="genre-input"
          name="genre"
          value={ valueGenre }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genero.propTypes = {
  valueGenre: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
