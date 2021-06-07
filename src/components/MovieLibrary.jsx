// implement AddMovie component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
}

  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie />
        <MovieList />
      </div>
    );
  }
}

export default MovieLibrary;
