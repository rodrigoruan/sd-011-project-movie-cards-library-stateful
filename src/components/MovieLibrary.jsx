import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

function callback() {}

function onClick() {}

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText=""
        onSearchTextChange={ callback }
        bookmarkedOnly={ false }
        onBookmarkedChange={ callback }
        selectedGenre=""
        onSelectedGenreChange={ callback }/>
        <MovieList movies={ this.props.movies } />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

export default MovieLibrary;
