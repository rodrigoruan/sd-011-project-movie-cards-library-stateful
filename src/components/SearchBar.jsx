// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component{
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly} = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props;
    return(
        <h1>t</h1>
    );
  }

}

export default SearchBar;