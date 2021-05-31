import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

const initialState = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
  movies: [],
};

class Movielibrary extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    const { movies } = this.props;
    let { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

Movielibrary.propTypes = {
  movies: PropTypes.arrayOf,
};

export default Movielibrary;
