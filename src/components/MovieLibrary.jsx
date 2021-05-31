import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from  './MovieList';
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
    // const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ this.state.searchText }
          bookmarkedOnly={ this.state.bookmarkedOnly }
          selectedGenre={ this.state.selectedGenre }
        />
        <MovieList />
        <AddMovie />
      </div>
    );
  }
}
/*
Movielibrary.propTypes = {
  movies: PropTypes.arrayOf,
};
*/
export default Movielibrary;
