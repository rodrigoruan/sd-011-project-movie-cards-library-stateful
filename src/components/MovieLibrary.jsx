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
      }, () => this.filterMovies());
      break;

    case 'checkbox':
      this.setState({
        bookmarkedOnly: target.checked,
      }, () => this.filterMovies());
      break;

    default:
      this.setState({
        selectedGenre: target.value,
      }, () => this.filterMovies());
      break;
    }
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;

    let filteredMovies = movies;

    if (bookmarkedOnly) {
      filteredMovies.filter((m) => m.bookmarked);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((m) => m.genre === selectedGenre);
    }

    if (searchText) {
      filteredMovies = filteredMovies.filter((m) => m.title
        .toLowerCase().includes(searchText.toLowerCase())
        || m.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || m.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    return this.setState({
      movies: filteredMovies,
    });
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
          bookmarkedOnly={ bookmarkedOnly }
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
