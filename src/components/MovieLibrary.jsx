import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      boomarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.HandleFilmFilters = this.HandleFilmFilters.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  HandleFilmFilters() {
    const { searchText, boomarkedOnly, selectedGenre, movies } = this.state;

    let filtersMovies = movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText));

    if (boomarkedOnly) {
      filtersMovies = filtersMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      filtersMovies = filtersMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return filtersMovies;
  }

  render() {
    const { searchText, boomarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          boomarkedOnly={ boomarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.HandleFilmFilters() } />

      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool.isRequired,
      genre: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
