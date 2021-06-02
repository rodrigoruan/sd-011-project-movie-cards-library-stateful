import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      movies: this.props.movies,
    };

    this.searchTextChange = this.searchTextChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
  }

  searchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  filteredMovies() {
    const { searchText, movies } = this.state;
    const arrayFilteredMovies = movies.filter((movie) => (
      (movie.title.toLowerCase().includes(searchText.toLowerCase()))
      || (movie.subtitle.toLowerCase().includes(searchText.toLowerCase()))
    ));

    return arrayFilteredMovies;
  }

  render() {
    return (
      <>
        <SearchBar searchTextChange={ this.searchTextChange } />
        <MovieList dataMovies={ this.filteredMovies() } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
