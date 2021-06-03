// implement AddMovie component here
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
    this.handleSeachBar = this.handleSeachBar.bind(this);
    this.filtro = this.filtro.bind(this);
  }

  handleSeachBar({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filtro() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    let newArray = movies;

    if (bookmarkedOnly === true) {
      newArray = movies.filter((movie) => movie.bookmarked === true);
    }

    if (searchText !== '') {
      newArray = movies.filter((movie) => movie.title
        .toLowerCase().includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText));
    }

    if (selectedGenre !== '') {
      newArray = movies.filter((movie) => movie.genre === selectedGenre);
    }

    return newArray;
  }

  addMovies(movie) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, movie],
    }));
  }

  render() {
    const { bookmarkedOnly, searchText, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleSeachBar }
          onBookmarkedChange={ this.handleSeachBar }
          onSelectedGenreChange={ this.handleSeachBar }
        />
        <MovieList movies={ this.filtro() } />
        <AddMovie onClick={ this.addMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieLibrary;
