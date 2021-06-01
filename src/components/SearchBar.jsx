import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="Texto">
          Inclui o texto
          <input
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            name="Texto"
            type="text"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="Check">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            name="Check"
            type="checkbox"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="Select">
          Filtrar por gênero
          <select
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
