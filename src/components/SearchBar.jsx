import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import BookmarkHandler from './BookmarkHandler';
import GenreSelector from './GenreSelector';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChance,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputText
          name="input-text"
          label="Inclui o texto:"
          inputTestId="text-input"
          labelTestId="text-input-label"
          value={ searchText }
          onChange={ onSearchTextChange }
          className="searchText"
        />

        <BookmarkHandler
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />

        <GenreSelector
          value={ selectedGenre }
          onChange={ onSelectedGenreChance }
        />

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
  onSelectedGenreChance: PropTypes.func.isRequired,
};

export default SearchBar;
