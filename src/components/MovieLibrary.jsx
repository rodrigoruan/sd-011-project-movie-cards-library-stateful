import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ (teste) => console.log(teste) } />
      </div>
    );
  }
}
export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
