import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchInputSelect extends Component {
  render() {
    const { genreValue, onchange } = this.props;

    return (
      <label htmlFor="selectedGenre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ genreValue }
          onChange={ onchange }
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">
            Todos
          </option>
          <option data-testid="select-option" value="action">
            Ação
          </option>
          <option data-testid="select-option" value="comedy">
            Comédia
          </option>
          <option data-testid="select-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

SearchInputSelect.propTypes = {
  genreValue: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,

};
