import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
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

  addNewMovie(info) {
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, info],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

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
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
        {/* Rodrigo Ruan me ajudou a fazer a 19, de fazer a callback onClick funcionar */}
        {/* E Tales também ajudou bastante */}
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
