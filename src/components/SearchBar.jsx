import React from 'react';
import SearchBarInputText from './SearchBarFormsInputs/SearchBarInputText';

class SearchBar extends React.Component {
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
      <form data-testid="search-bar-form">
        <SearchBarInputText
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
      </form>
    );
  }
}

export default SearchBar;
