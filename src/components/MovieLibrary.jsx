import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { type } = target;

    switch (type) {
    case 'text':
      this.setState({
        searchText: target.value,
      });
      break;

    case 'checkbox':
      this.setState({
        bookmarkedOnly: target.checked,
      });
      break;

    default:
      this.setState({
        selectedGenre: target.value,
      });
      break;
    }
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    let filteredMovies = movies;

    if (bookmarkedOnly) { filterededMovies.filter((m) => m.bookmarked); }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((m) => m.genre === selectedGenre);
    }

    if (searchText) {
      filteredMovies = filteredMovies.filter((m) => m.title
        .toLowerCase().includes(searchText)
        || m.subtitle.toLowerCase().includes(searchText)
        || m.storyline.toLowerCase().includes(searchText));
    }
    return filteredMovies;
  }

  addMovie(newMovie) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div className="movie-library">
        <h2> My awesome movie library </h2>

        <SearchBar
          searchText={ searchText }
          bokmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />

        <MovieList movies={ movies } />

        <AddMovie onClick={ (newMovie) => this.addMovie(newMovie) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

MovieLibrary.defaultProps = {
  movies: [{}],
};
