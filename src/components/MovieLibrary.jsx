// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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

    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    const includeMovie = movies.filter((movie) => (
      movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value)
    ));
    if (value !== '') {
      this.setState(() => ({
        searchText: value,
        movies: includeMovie,
      }));
    } else {
      this.setState(() => ({
        searchText: value,
        movies,
      }));
    }
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { movies } = this.props;
    const favoriteMovies = movies.filter((movie) => movie.bookmarked === true);
    if (checked === false) {
      this.setState(() => ({
        movies,
        bookmarkedOnly: false,
      }));
    } else {
      this.setState(() => ({
        movies: favoriteMovies,
        bookmarkedOnly: true,
      }));
    }
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    const genreMovies = movies.filter((movie) => movie.genre === value);
    if (value !== '') {
      this.setState(() => ({
        movies: genreMovies,
        selectedGenre: value,
      }));
    } else {
      this.setState(() => ({
        movies,
        selectedGenre: value,
      }));
    }
  }

  misteriousFunction() {

  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.misteriousFunction } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
