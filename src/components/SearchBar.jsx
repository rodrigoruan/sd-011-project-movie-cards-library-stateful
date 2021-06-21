// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form
        data-testid="search-bar-form"
        onBookmarkedChange={ onBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ onSelectedGenreChange }
      >
        <label htmlFor="input-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            id="input-text"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="input-checkbox"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
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
