import React from 'react';
import SearchBarInputText from './SearchBarFormsInputs/SearchBarInputText';
import SearchBarInputCheckbox from './SearchBarFormsInputs/SerchBarInputCheckbox';

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
        <SearchBarInputCheckbox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
      </form>
    );
  }
}

export default SearchBar;
