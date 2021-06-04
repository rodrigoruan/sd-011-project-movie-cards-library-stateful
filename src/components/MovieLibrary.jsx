import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
// import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        {/*
        <MovieList movies="" />
        <AddMovie onClick="" />
         */}
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.exact().isRequired,
// };

export default MovieLibrary;
