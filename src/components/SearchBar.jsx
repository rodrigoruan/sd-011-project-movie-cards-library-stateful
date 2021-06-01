import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      search: {
        searchText,
        onSearchTextChange,
        bookmarkedOnly,
        onBookmarkedChange,
        selectedGenre,
        onSelectedGenreChange,
      },
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="control" data-testid="text-input-label">
            Inclui o texto:
            <input
              onChange={ onSearchTextChange }
              data-testid="text-input"
              type="text"
              value={ searchText }
            />
          </label>
          <label htmlFor="control" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              onChange={ onBookmarkedChange }
              type="checkbox"
              checked={ bookmarkedOnly }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="control" data-testid="select-input-label">
            Filtrar por gênero
            <select
              onChange={ onSelectedGenreChange }
              value={ selectedGenre }
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
