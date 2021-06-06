// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={ searchText } onChange={ onSearchTextChange } data-testid="text-input" />
        </label>
        <label htmlFor="checkbox">
          Mostrar somente favoritos
          <input type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input" />
        </label>
        <label htmlFor="text">
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
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
  onSelectedGenreChange: PropTypes.string.isRequired,
};

export default SearchBar;
