// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label
            data-testid="text-input-label"
            htmlFor="search-input"
          >
            Inclui o texto:

            <input
              id="search-input"
              type="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>

          <label
            data-testid="checkbox-input-label"
            htmlFor="favorites-checkbox"
          >
            Mostrar somente favoritos

            <input
              id="favorites-checkbox"
              type="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
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
};

export default SearchBar;
