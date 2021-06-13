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
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  addMovieOnClick(movie) {
    this.setState((initialState) => ({
      movies: [...initialState.movies, movie],
    }));
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieOnClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = ({
  movies: PropTypes.arrayOf({}),
}).isRequired;

export default MovieLibrary;
