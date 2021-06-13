import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      boomarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.checkSearchBar = this.checkSearchBar.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
  }

  checkSearchBar({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  addMovie(movie) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, movie],
    }));
  }

  filterMovie() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    let apliedFilter = movies;
    if (bookmarkedOnly === true) {
      apliedFilter = movies.filter((movie) => movie.bookmarked === true);
    }

    if (searchText !== '') {
      apliedFilter = movies.filter((movie) => movie.title
        .toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText));
    }

    if (selectedGenre !== '') {
      apliedFilter = movies.filter((movie) => movie.genre === selectedGenre);
    }

    return apliedFilter;
  }

  render() {
    const { searchText, boomarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.checkSearchBar }
          boomarkedOnly={ boomarkedOnly }
          onBookmarkedChange={ this.checkSearchBar }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.checkSearchBar }
        />
        <MovieList movies={ this.filterMovie() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
