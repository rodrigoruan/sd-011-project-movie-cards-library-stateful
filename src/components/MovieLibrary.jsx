import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      onBookmarkedChange: '',
      onSelectedGenreChange: '',
    };
    this.addMovies = this.addMovies.bind(this);
    this.filtro = this.filtro.bind(this);
  }

  addMovies(movie) {
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, movie],
    }));
  }

  filtro() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    let array = movies;
    if (bookmarkedOnly === true) {
      array = array.filter((movie) => movie.bookmarked === true);
    }

    if (searchText !== '') {
      array = array.filter((movie) => movie.title
        .toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText));
    }

    if (selectedGenre !== '') {
      array = array.filter((movie) => movie.genre === selectedGenre);
    }

    return array;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onBookmarkedChange,
      onSelectedGenreChange,
      filtro,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ onBookmarkedChange }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ filtro } />
        <AddMovie onClick={ (movie) => this.addMovies(movie) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf,
};

MovieLibrary.defaultProps = {
  movies: {},
};

export default MovieLibrary;
