import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchInput" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchInput"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            name="searchText"
          />
        </label>
        <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            id="checkboxInput"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            name="bookmarkedOnly"
          />
        </label>
        <label htmlFor="selectInput" data-testid="select-input-label">
          Filtrar por gênero:
          <select
            id="selectInput"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            name="selectedGenre"
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: undefined,
  bookmarkedOnly: 'False',
  onBookmarkedChange: undefined,
  selectedGenre: '',
  onSelectedGenreChange: undefined,
};
