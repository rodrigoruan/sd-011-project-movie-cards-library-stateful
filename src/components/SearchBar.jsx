import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import BookmarkHandler from './BookmarkHandler';
import GenreSelector from './GenreSelector';
import './Styles/SearchBar.css';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" className="input-form">
        <InputText
          name="searchText"
          label="Inclui o texto:"
          inputTestId="text-input"
          labelTestId="text-input-label"
          value={ searchText }
          handler={ onSearchTextChange }
          className="input-text"
        />

        <BookmarkHandler
          bookmarkedOnly={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />

        <GenreSelector
          value={ selectedGenre }
          handler={ onSelectedGenreChange }
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
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
