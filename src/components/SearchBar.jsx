// implement AddMovie component here
import React from 'react';

/* searchText, uma string
onSearchTextChange, uma callback
bookmarkedOnly, um boolean
onBookmarkedChange, uma callback
selectedGenre, uma string
onSelectedGenreChange, uma callback */

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

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
      <>
      </>
    );
  }
}

export default SearchBar;
