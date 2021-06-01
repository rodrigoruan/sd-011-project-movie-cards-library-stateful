import React, { Component } from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propType = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
