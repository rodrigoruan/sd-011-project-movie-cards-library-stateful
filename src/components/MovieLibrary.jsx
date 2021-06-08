import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.addMovies = this.addMovies.bind(this);
    this.movies = this.movies.bind(this);
  }

  addMovies(movie) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, movie],
    }));
  }

  movies() {
    const { movies,
      bookmarkedOnly,
      selectedGenre,
      searchText,
    } = this.state;

    let filterMovies = movies;
    if (bookmarkedOnly === true) {
      filterMovies = movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      filterMovies = movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      filterMovies = movies.filter((movie) => (
        (movie.title.includes(searchText))
        || (movie.subtitle.includes(searchText))
        || (movie.storyline.includes(searchText))
      ));
    }
    return filterMovies;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ this.movies() } />
        <AddMovie onCLick={ this.addMovies } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
