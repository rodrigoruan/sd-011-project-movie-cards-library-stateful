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
          name="includes"
          id="includes"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    </form>
  );
}
