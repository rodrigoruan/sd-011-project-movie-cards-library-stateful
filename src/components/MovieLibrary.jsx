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
    this.addMovies = this.addMovies.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.checkboxCheck = this.checkboxCheck.bind(this);
  }

  checkboxCheck({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovies(movie) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, movie],
    }));
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let arrayMovies = movies;
    if (bookmarkedOnly === true) {
      arrayMovies = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      arrayMovies = movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      arrayMovies = movies.filter((movie) => movie
        .title.toLowerCase().includes(searchText)
    || movie.subtitle.toLowerCase().includes(searchText)
    || movie.storyline.toLowerCase().includes(searchText));
    }
    return arrayMovies;
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
          onSearchTextChange={ this.checkboxCheck }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.checkboxCheck }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.checkboxCheck }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
