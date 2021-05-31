import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            <span>Inclui o texto:</span>
            <input
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
              id="text-input"
            />
          </label>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            <span>Mostrar somente favoritos</span>
            <input
              type="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              id="checkbox-input"
            />
          </label>
          <label htmlFor="select-input" data-testid="select-input-label">
            <span>Filtrar por gênero</span>
            <select
              data-testid="select-input"
              name="selectInput"
              id="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
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
