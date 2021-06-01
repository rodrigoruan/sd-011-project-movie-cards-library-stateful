import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  filterMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly) {
      movies = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      movies = movies.filter((movie) => movie.genre.includes(selectedGenre));
    }
    if (searchText) {
      movies = movies.filter(
        (movie) => movie.title.toUpperCase().includes(searchText.toUpperCase())
          || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
          || movie.storyline.toUpperCase().includes(searchText.toUpperCase()),
      );
    }
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(movies) } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
