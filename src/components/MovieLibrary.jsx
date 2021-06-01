import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.submitMovie = this.submitMovie.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.state = {
      movies,
    };
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
      movies: movies.filter((movie) => movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value)),
    }));
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    const { name, checked } = target;
    this.setState(() => ({
      [name]: checked,
      movies: movies.filter((movie) => {
        if (checked === true) {
          return movie.bookmarked === checked;
        }
        return movies;
      }),
    }));
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
      movies: movies.filter((movie) => {
        if (value) {
          return movie.genre === value;
        }
        return movies;
      }),
    }));
  }

  submitMovie(data) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, data],
    }));
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <SearchBar
          onSelectedGenreChange={ this.onSelectedGenreChange }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.submitMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
