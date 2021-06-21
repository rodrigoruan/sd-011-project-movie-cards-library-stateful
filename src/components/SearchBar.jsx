// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchInput" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            id="searchInput"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label htmlFor="favorites" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            id="favorites"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>

      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
}.isRequired;

export default SearchBar;
