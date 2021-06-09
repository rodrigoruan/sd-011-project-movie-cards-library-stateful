import React from 'react';
import PropTypes from 'prop-types';

// Pedi ajuda na sala "A"
class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchBarTextInput">
          Inclui o texto:
          <input
            data-testid="text-input"
            id="searchBarTextInput"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            name="searchText"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="searchBarBook">
          Mostrar somente favoritos
          <input
            id="searchBarBook"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            name="bookmarkedOnly"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="searchBarSelect">
          Filtrar por gênero
          <select
            id="searchBarSelect"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            name="selectedGenre"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
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

export default SearchBar;
