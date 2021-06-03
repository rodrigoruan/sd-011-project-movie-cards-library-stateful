import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <AddMovie />
        <MovieList />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.exact({ }).isRequired,
};

export default MovieLibrary;
