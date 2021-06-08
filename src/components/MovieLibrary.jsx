import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import Movielist from './MovieList';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText
          onSearchTextChange
          bookmarkedOnly
          onBookmarkedChange
          selectedGenre
          onSelectedGenreChange
        />
        <Movielist />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
