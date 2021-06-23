import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import data from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      moviesList: data,
    };
  }

  render() {
    const { movies } = this.props;
    const { moviesList } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } movie={ moviesList } />
        <AddMovie onClick={ (newMovie) => this.addMovieData(newMovie, moviesList) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
