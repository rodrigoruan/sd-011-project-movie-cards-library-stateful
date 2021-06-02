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
    };
    this.addMovies = this.addMovie.bind(this);
    this.selectMovies = this.selectMovies.bind(this);
    this.handleMovies = this.handleMovies.bind(this);
  }

  handleMovies({ target }) {
    const { name } = target;
    const { value } = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovie(movie) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, movie],
    }));
  }

  selectMovies() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    let newArray = movies;
    if (bookmarkedOnly) {
      newArray = movies.filter((movie) => movie.bookmarked === true);
    }

    if (searchText !== '') {
      newArray = movies.filter((movie) => movie.title.toLowerCase().includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText));
    }
    if (selectedGenre !== '') {
      newArray = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return newArray;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleMovies }
          onBookmarkedChange={ this.handleMovies }
          onSelectedGenreChange={ this.handleMovies }
        />
        <MovieList movies={ this.selectMovies() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf,
};
MovieLibrary.defaultProps = {
  movies: {},
};
