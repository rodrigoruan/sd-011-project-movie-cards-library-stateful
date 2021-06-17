import React, { Component } from 'react';
import { func, bool, string } from 'prop-types';
import SearchTextInput from './SearchBarInputs/SearchTextInput';
import BookmarkedOnly from './SearchBarInputs/BookmarkedOnly';
import SelectedGenre from './SearchBarInputs/SelectedGenre';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <SearchTextInput
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <BookmarkedOnly
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <SelectedGenre
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: string,
  onSearchTextChange: func,
  bookmarkedOnly: bool,
  onBookmarkedChange: func,
  selectedGenre: string,
  onSelectedGenreChange: func,
}.isRequired;

export default SearchBar;
