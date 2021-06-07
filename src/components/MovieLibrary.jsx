import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class Movielibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.handleSearch = this.handleSearch.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.searchedMovies = this.searchedMovies.bind(this);
    this.newMovie = this.newMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleSearch({ target }) {
    const { value } = target;

    this.setState({
      searchText: value,
    });
  }

  handleBookmark({ target }) {
    const { checked } = target;

    this.setState({
      bookmarkedOnly: checked,
    });
  }

  handleGenre({ target }) {
    const { value } = target;

    this.setState({
      selectedGenre: value,
    });
  }

  searchedMovies() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;

    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (movies.searchText !== '') {
      return movies.filter((movie) => (
        (movie.title.toLowerCase().includes(searchText.toLowerCase()))
          || (movie.subtitle.toLowerCase().includes(searchText.toLowerCase()))
          || (movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
      ));
    }

    return movies;
  }

  newMovie(newMovie) {
    const { movies } = this.props;

    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { movies } = this.props;

    return (
      <div>
        <SearchBar
          movies={ movies }
          onBookmarkedChange={ this.handleBookmark }
          onSearchTextChange={ this.handleSearch }
          onSelectedGenreChange={ this.handleGenre }
        />
        <MovieList movies={ this.searchedMovies() } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

Movielibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
