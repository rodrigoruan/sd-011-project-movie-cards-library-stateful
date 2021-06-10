import React from 'react';
// import PropTypes from 'prop-types';

export default function SearchBar(props) {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange,
  } = props;

  return (
    <form data-testid="search-bar-form">
      <label htmlFor="includes" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="selectedGenre"
          id="selectedGenre"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
      <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          id="bookmarkedOnly"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    </form>
  );
}
