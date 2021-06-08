import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import Data from '../data';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie />
        <MovieList movies={ Data } />
      </div>
    );
  }
}

export default MovieLibrary;
