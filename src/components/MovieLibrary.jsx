import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
    };
  }

  addMovies() {
    console.log(movies);
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovies } />
      </div>
    );
  }
}

export default MovieLibrary;
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf,
};
MovieLibrary.defaultProps = {
  movies: {},
};
