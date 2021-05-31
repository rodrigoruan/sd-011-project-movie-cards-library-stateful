import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import data from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: { data },
    };
  }

  render() {
    return (
      <div>
        <h2 className="mt-3 text-center"> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={data} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
