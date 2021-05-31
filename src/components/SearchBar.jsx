// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      // Consulta para resolver o problema de 'for' da label https://stackoverflow.com/questions/22752116/react-ignores-for-attribute-of-the-label-element
      <form data-testid="search-bar-form">
        <label htmlFor="searchBarFTextInputLabel" data-testid="text-input-label">
          <span>Inclui o texto:</span>
          <input
            id="searchBarFTextInputLabel"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="searchBarFCheckboxInputLabel" data-testid="checkbox-input-label">
          <span>Mostrar somente favoritos</span>
          <input
            id="searchBarFCheckboxInputLabel"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
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
};
