// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <h1>Meu Form</h1>
      </form>
    );
  }
}

export default SearchBar;
