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
    this.handleChangeSearchBar = this.handleChangeSearchBar.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
  }

  // Requisito 17
  handleChangeSearchBar({ target }) {
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

  // Requisito 18
  moviesFilter() {
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
    const { searchText,
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
          onSearchTextChange={ this.handleChangeSearchBar }
          onBookmarkedChange={ this.handleChangeSearchBar }
          onSelectedGenreChange={ this.handleChangeSearchBar }
        />
        <MovieList movies={ this.moviesFilter() } />
        <AddMovie onCLick={ this.addMovies } />
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
