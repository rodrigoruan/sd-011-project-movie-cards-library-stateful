import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    searchText: '',
    onSearchTextChange: '',
    bookmarkedOnly: false,
    onBookmarkedChange: '',
    selectedGenre: '',
    onSelectedGenreChange: '',
    };

    this.addMovies = this.addMovies.bind(this)
  }
addMovies() {
}

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
        searchText={ this.state.searchText }
        bookmarkedOnly={ this.state.bookmarkedOnly }
        selectedGenre={ this.state.selectedGenre }
        />
        <AddMovie addMovie={this.addMovie}/>
        <MovieList movies={ this.props.movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
