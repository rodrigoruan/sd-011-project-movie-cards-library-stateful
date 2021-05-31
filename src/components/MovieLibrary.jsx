import React from 'react';
import movies from '../data';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies
    }
  }
  
  render() {
    const { movies } = this.props
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary