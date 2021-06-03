// implement AddMovie component here
import React from 'react';

export default class SearchBar extends React.Component {
  render() {

    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}
