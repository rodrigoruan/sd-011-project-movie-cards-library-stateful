import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="filtro" data-testid="text-input-label">
          Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            name="searchText"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            id="bookmarkedOnly"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
          />
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
