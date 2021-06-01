// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="textInput" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="textInput"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
            Mostrar somente favoritos:
            <input
              id="checkboxInput"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="selectOption" data-testid="select-input-label">
            Filtrar po gênero:
            <select id="selectOption" value="selectedGenre" data-testid="select-input">
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
