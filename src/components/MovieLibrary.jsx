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
  }

  addMovies(movie) {
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, movie],
    }));
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
      onBookmarkedChange,
      onSelectedGenreChange,
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
        <MovieList movies={ movies } />
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
