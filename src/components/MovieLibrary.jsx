import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovies from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovies onClick={ () => {} } />
      </div>
    );
  }
}
export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.string,
}.isRequired;
