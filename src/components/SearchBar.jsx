// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          name="Inclui o texto:"
          htmlFor="searchText"
        >
          Inclui o texto:
          <input
            data-testid="text-input"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label
          data-testid="checkbox-input-label"
          name="Mostrar somente favoritos"
          htmlFor="bookmarkedOnly"
        >
          <input
            name="bookmarkedOnly"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <label data-testid="select-input-label" name="selectedGenre" htmlFor="i4">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={ selectedGenre }
            name="selectedGenre"
            onChange={ onSelectedGenreChange }
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

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
