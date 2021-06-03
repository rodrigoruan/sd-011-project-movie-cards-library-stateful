import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovies from './AddMovies';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleCheck({ target }) {
    const { name, checked } = target;
    this.setState({ [name]: checked });
  }

  addMovie(movie) {
    this.setState((thisState) => ({
      movies: [...thisState.movies, movie],
    }));
  }

  filterMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const re = (regex) => new RegExp(regex, 'i');

    if (searchText) {
      movies = movies.filter(({ title, subtitle, storyline }) => (
        `${title} ${subtitle} ${storyline}`.match(re(searchText))
      ));
    }

    if (bookmarkedOnly) {
      movies = movies.filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre) {
      movies = movies.filter(({ genre }) => selectedGenre === genre);
    }

    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          selectedGenre={ selectedGenre }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleCheck }
          onSearchTextChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(movies) } />
        <AddMovies addMovie={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
