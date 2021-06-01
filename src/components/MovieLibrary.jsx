import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie/AddMovie';

export default class MovieLibrary extends Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    const { movies } = this.props;

    return (
      <div className="movie-library">
        <h2> My awesome movie library </h2>

        <SearchBar />

        <MovieList movies={ movies } />

        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
