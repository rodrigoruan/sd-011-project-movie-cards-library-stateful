import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      filteredMovies = filteredMovies.filter((movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
    }
    return filteredMovies;
  }

  newMovie(movieData) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, movieData],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovies = this.filterMovies();

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ (movieData) => this.newMovie(movieData) } />
        <MovieList movies={ filteredMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
