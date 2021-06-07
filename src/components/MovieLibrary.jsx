import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
