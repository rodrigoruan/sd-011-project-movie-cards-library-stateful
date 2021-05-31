import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';

export default class Movielibrary extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: '',
  //   };
  // }

  render() {
    const { movies } = this.props;

    return (
      <MovieList movies={ movies } />

    );
  }
}

Movielibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
